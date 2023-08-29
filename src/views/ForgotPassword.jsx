import { useNavigate } from "react-router-dom"


function ForgotPassword() {

    const navigate = useNavigate()


    return (
        <>
            <section className="Login">
                <div className="Container">
                    <div className="top">

                        <a href="/app" className="logo"> Pomodoro-app</a>
                        <h3>Reset Password</h3>

                    </div>
                    <form action="" className="LoginForm">

                        <div className="formInputs">
                            <label htmlFor="EMAIL" className="emailLabel"> EMAIL </label>
                            <input type="email" name="" id="" className="emailInput" placeholder="example@mail.com" />
                        </div>

                        <button type=" submit" className="submitButton"> Reset Password</button>
                    </form>

                    <div className="Btm">
                        <h4 className="">
                            Try other methods?
                        </h4>

                        <a href="" className="btmLink"
                            onClick={(e) => {
                                e.preventDefault()
                                navigate('/login')
                            }}>
                            Login
                        </a>
                    </div>
                </div>
            </section >
        </>
    )
}

export default ForgotPassword