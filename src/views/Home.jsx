import { useContext } from "react"
import Nav from "../components/Nav"
import Timer from "../components/Timer"
import { themeContext } from "../features/themeContext"
import Task from "../components/Task"

function Home() {

    // 0b5c53

    const bgColor = useContext(themeContext)

    return (
        <>
            <main className="home" style={{ backgroundColor: bgColor.theme }}>
                <div className="container">
                    <Nav />
                    <Timer />
                    <Task />
                </div>
            </main >
        </>
    )
}

export default Home