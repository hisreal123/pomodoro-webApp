import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Welcome() {
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/app');
        }, 10000);

        return () => clearTimeout(timeout);
    }, [navigate])


    return (
        <>
            <section className="welcomeScreen">
                <div className="loadingWrapper">
                    <p className="loading">Chill </p>

                    {/* from loading.css */}
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            </section>
        </>
    )
}

export default Welcome