

import { AiTwotoneSetting } from "react-icons/ai"
import { BiBarChartSquare } from "react-icons/bi"
import { RxAvatar } from "react-icons/rx"

function Nav() {
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
                    <span className="icons-wrapper"><RxAvatar className="icons" /></span>
                </div >
            </div >
        </>
    )
}

export default Nav