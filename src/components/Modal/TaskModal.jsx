import { useContext } from 'react'
import { modalContext } from '../../features/modalContext'

function TaskModal() {

    const showTaskModal = useContext(modalContext)
    const close = showTaskModal.showTaskModal

    return (
        <>
            <section className={`TaskModal ${close ? 'show' : 'hidden'}`} >

                <div className="wrap">
                    <ul>
                        <li className='opt-fun'> Clear finished tasks</li>
                        <li className='opt-fun'> Clear act pomodoros</li>
                        <li className='opt-fun'></li>
                        <li className='opt-fun'></li>
                    </ul>
                </div>

            </section>
        </>
    )
}

export default TaskModal

