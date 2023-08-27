import { useContext, useEffect, useState } from "react"
import { themeContext } from "../features/themeContext"
import { AiOutlinePause } from "react-icons/ai"
import timerStart from '../assets/timerStart.wav'
import timerPause from '../assets/timerPause.wav'
import timerStop from '../assets/timerDone.wav'

function Timer() {

    const setTheme = useContext(themeContext)
    const pomodoro = useContext(themeContext)
    const shortBreak = useContext(themeContext)
    const longBreak = useContext(themeContext)


    const [currentTime, setCurrentTime] = useState(pomodoro.pomodoro)
    const [start, setStart] = useState(false)
    const [pause, setPause] = useState(false)


    // Audio
    const [audioStart] = useState(new Audio(timerStart))
    const [audioPause] = useState(new Audio(timerPause))
    // const [audioStop] = useState(new Audio(timerStop))

    const playAudio = (audio) => {
        return audio.play().catch((error) => {
            console.error("Error playing sound:", error);
        })
    }

    // there can be a better way of doing this
    const handlePomodoro = () => {
        if (pomodoro) {
            setTheme.setTheme("#e76f51")
            setCurrentTime(pomodoro.pomodoro)
        }
    }
    const handleLongBreak = () => {
        if (longBreak) {
            setTheme.setTheme("#0b5c53")
            setCurrentTime(longBreak.longBreak)
        }
    }
    const handleShortBreak = () => {
        if (shortBreak) {
            setTheme.setTheme("#457b9d")
            setCurrentTime(shortBreak.shortBreak)
        }
    }


    // Start && Pause fn()
    const handleClickedStart = () => {
        setStart(!start)
        playAudio(audioStart)
    }

    const handlePause = () => {
        playAudio(audioPause)
        setStart(!start)
        setPause(!pause)
    }




    useEffect(() => {

        if (start) {
            const [minutes, seconds] = currentTime.split(':').map(Number);
            // it takes the value in currentTime, split them into minutes and seconds with the : as seperator
            // it then maps the value comming from the currrentTime into the minutes and seconds
            // all JavaScript number are 64-bit floating-points numbers

            const timeout = setTimeout(() => {
                if (minutes === 0 && seconds === 0) {
                    // playAudio(audioStop)
                    setPause(false)
                    clearTimeout(timeout);
                    return;
                }

                if (seconds === 0) { //checks for seconds first, then works with minutes
                    setCurrentTime(`${minutes - 1}:59`);
                } else { //checks for seconds, then works with minutes
                    setCurrentTime(`${minutes}:${seconds - 1}`);
                }
            }, 1000);

            return () => clearTimeout(timeout); // Cleanup the timer when the component unmounts or re-renders
        }

    }, [start, currentTime]);

    return (
        <>
            <section className="Timer" style={{ opacity: 1, backgroundColor: '' }}>
                <div className="btnWrapper">
                    <button className="SwitchButton" onClick={handlePomodoro}>  Pomodoro </button>
                    <button className="SwitchButton" onClick={handleShortBreak}>  Short Break </button>
                    <button className="SwitchButton" onClick={handleLongBreak}>  Long Break </button>
                </div>

                <div className="timerTick">
                    <div className="tick">
                        <h1 className="currentTime">{currentTime}</h1>
                    </div>

                    <div className="btnSS">
                        <button className="startButton" onClick={handleClickedStart}>START</button>

                        {start ? (
                            <button
                                className="pauseButton"
                                style={{ cursor: 'pointer' }}
                                onClick={handlePause}
                            > <AiOutlinePause /> </button>
                        ) : ""}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Timer