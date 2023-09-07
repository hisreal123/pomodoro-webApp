

import { AiTwotoneSetting } from "react-icons/ai"
import { BiBarChartSquare } from "react-icons/bi"
import { RxAvatar } from "react-icons/rx"
import { useNavigate } from "react-router-dom"
import { modalContext } from "../features/modalContext"
import { useContext } from "react"



function Nav() {

    const navigate = useNavigate()

    const setSettings = useContext(modalContext)
    const settings = useContext(modalContext)

    // const show = settings.settings
    const show = settings.settings
    console.log(show)

    const handleSettings = () => {
        setSettings.setSettings(!settings.settings)
        console.log('ddddddddddddddddd')
    }

    return (
        <>
            <div className="Navigation">
                <div className="left">
                    <span>

                    </span>
                    <p className="title"> Pomodoro..</p>
                </div>
                <div className="right">
                    <span className="icons-wrapper"><BiBarChartSquare className="icons" /></span>
                    <span className="icons-wrapper" onClick={handleSettings}><AiTwotoneSetting className="icons" /></span>
                    <span className="icons-wrapper"
                        onClick={() => navigate('/login')}><RxAvatar className="icons" /></span>
                </div >
            </div >
        </>
    )
}

export default Nav