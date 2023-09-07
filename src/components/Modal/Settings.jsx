import { useContext } from "react"
import { modalContext } from "../../features/modalContext"
import  SettingOptions  from "./SettingOptions"

function Settings() {

    const settings = useContext(modalContext)
    const close = settings.settings

    return (
        <>
            {close ? (
                <section
                    className={`settings ${close ? 'show' : 'hidden'}`}
                >
                    <div className="a">
                        <SettingOptions />
                    </div>
                </section>
            ) : ''}
        </>
    )
}

export default Settings