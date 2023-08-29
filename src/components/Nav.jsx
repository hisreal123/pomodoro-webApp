

import { AiTwotoneSetting } from "react-icons/ai"
import { BiBarChartSquare } from "react-icons/bi"
import { RxAvatar } from "react-icons/rx"
import { useNavigate } from "react-router-dom"


function Nav() {

    const navigate = useNavigate()

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
                    <span className="icons-wrapper"><AiTwotoneSetting className="icons" /></span>
                    <span className="icons-wrapper"
                        onClick={() => navigate('/login')}><RxAvatar className="icons" /></span>
                </div >
            </div >
        </>
    )
}

export default Nav