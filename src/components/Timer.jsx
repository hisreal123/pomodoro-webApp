import { useContext, useEffect, useState } from "react"
import { themeContext } from "../features/themeContext"
import { BiPlayCircle } from "react-icons/bi"


function Timer() {

    const setTheme = useContext(themeContext)
    const pomodoro = useContext(themeContext)
    const shortBreak = useContext(themeContext)
    const longBreak = useContext(themeContext)



    const [currentTime, setCurrentTime] = useState(pomodoro.pomodoro)
    const [showPause, setShowPause] = useState(false)



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


    // StartFunction
    const handleClickedStart = () => {
        setShowPause(!showPause)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!currentTime) {
                return;
            }
            if (currentTime > 0) {
                return (currentTime * 60) - 1
            }
        }, 1000)

        return clearInterval(interval)
    }, [currentTime])

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

                        {showPause ? (
                            <button className="pauseButton "> <BiPlayCircle /> </button>
                        ) : ""}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Timer