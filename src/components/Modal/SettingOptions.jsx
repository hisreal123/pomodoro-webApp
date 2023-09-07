import { IoMdClose } from "react-icons/io"
import { RiTaskLine } from "react-icons/ri"
import { AiOutlineClockCircle, } from "react-icons/ai"
import { themeContext } from "../../features/themeContext"
import { useContext, useState } from "react"
import { modalContext } from "../../features/modalContext"

function SettingOptions() {

    const {
        pomodoro,
        setPomodoro,
        shortBreak,
        setShortBreak,
        longBreak,
        setLongBreak
    } = useContext(themeContext);


    const { settings, setSettings } = useContext(modalContext)


    const [pm, setPm] = useState(
        parseInt(pomodoro?.split(':')[0], 10) // Extract the minutes from "xx:00"
    );
    const [lBreak, setLBreak] = useState(
        parseInt(longBreak?.split(':')[0], 10) // Extract the minutes from "xx:00"
    );
    const [sBreak, setSBreak] = useState(
        parseInt(shortBreak?.split(':')[0], 10) // Extract the minutes from "xx:00"
    );


    const formated = (arg1) => {
        return `${arg1 < 10 ? '0' : ''}${arg1}:00`;
    }

    const handlePomodoroChange = (event) => {
        const minutes = parseInt(event.target.value);
        setPm(minutes);
        formated({ arg1: minutes });
    }

    const handleShortBreak = (event) => {
        const minutes = parseInt(event.target.value);
        setSBreak(minutes);
        formated({ arg1: minutes });
    }

    const handleLongBreak = (event) => {
        const minutes = parseInt(event.target.value);
        setLBreak(minutes);
        formated({ arg1: minutes });
    }

    const handleChecked = () => {
        // alert(" It's checked !! nigga")
    }

    const handleUpdateSettings = (event) => {
        event.preventDefault()

        // const minutes = parseInt(event.target.value);

        setPomodoro(formated(pm));
        setShortBreak(formated(sBreak));
        setLongBreak(formated(lBreak));

        setSettings(false);

    }


    return (
        <>
            <section className='settingOptions'>
                <form action="" onSubmit={handleUpdateSettings}>

                    <div className="head">
                        <h4> Setting </h4>
                        <IoMdClose
                            className="closeIcon"
                            onClick={() => setSettings(!settings)}
                        />
                    </div>

                    <div className="timer">
                        <div className="d">
                            <AiOutlineClockCircle
                            />
                            <h4> Timer </h4>
                        </div>

                        <div className="dd">
                            <h4>Time(Minutes)</h4>
                        </div>

                        <div className="inputValues">
                            <input type="number" value={pm || ''} onChange={handlePomodoroChange}
                                className="LngBrek"
                            />
                            <input
                                value={lBreak || ''}
                                onChange={handleLongBreak}
                                className="pomodoro"
                                type="number"
                            />
                            <input
                                value={sBreak || ''}
                                onChange={handleShortBreak}
                                className="ShrtBrek" type="number" name="" id=""
                            />
                        </div>


                        <div className="bbb">
                            <div className="bb">
                                <h3>Auto Start Breaks</h3>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="bb">
                                <h3>Auto Start Pomodoros</h3>
                                <label className="switch">
                                    <input type="checkbox" onChange={handleChecked} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="bb">
                                <h3>Long Break interval</h3>
                                <input type="number" />
                            </div>
                        </div>
                    </div>


                    <div className="task">
                        <div className="d">
                            <RiTaskLine />
                            <h4> Task </h4>
                        </div>

                        <div className="bbb">
                            <div className="bb">
                                <h3>Auto Check Tasks</h3>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className="bb">
                                <h3>Auto Switch Tasks</h3>
                                <label className="switch">
                                    <input type="checkbox" onChange={handleChecked} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="ok">
                        <button
                            type="submit" className="SubmitUpdate"> OK </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default SettingOptions