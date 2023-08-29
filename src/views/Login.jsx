import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom"


function Login() {

    const navigate = useNavigate()


    return (
        <>
            <section className="Login">
                <div className="Container">
                    <div className="top">

                        <a href="/app" className="logo"> Pomodoro-app</a>
                        <h3>Login</h3>

                    </div>
                    <form action="" className="LoginForm">

                        <button className="googleAuth">
                            <FcGoogle className="gIcon" />
                            <span className="gWord"> Login with Google</span>
                        </button>

                        <div className="divider">
                            <span className="line"></span>
                            <span className="or"> or </span>
                            <span className="line"></span>
                        </div>

                        <div className="formInputs">
                            <label htmlFor="EMAIL" className="emailLabel"> EMAIL </label>
                            <input type="email" name="" id="" className="emailInput" placeholder="example@mail.com" />
                            <label htmlFor="EMAIL" className="pswdLabel"> PASSWORD </label>
                            <input type="password" name="" id="" className="pswdInput" />
                        </div>

                        <button type=" submit" className="submitButton"> Log in with Email</button>
                        <a href="" className="forgotPassword"
                            onClick={(e) => {
                                e.preventDefault()
                                navigate('/forgot')
                            }}
                        > Forgot Password</a>
                    </form>

                    <div className="Btm">
                        <h4 className="">
                            Do not have an account?
                        </h4>

                        <a href="" className="btmLink"
                            onClick={(e) => {
                                e.preventDefault()
                                navigate('/signup')
                            }}>
                            Create account</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login