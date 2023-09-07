import { useContext } from 'react'
import { modalContext } from '../../features/modalContext'
import { BiSolidTrash } from 'react-icons/bi'
import { MdDone } from 'react-icons/md'

function TaskModal() {

    const showTaskModal = useContext(modalContext)
    const close = showTaskModal.showTaskModal

    return (
        <>
            <section className={`TaskModal ${close ? 'show' : 'hidden'}`} >

                <div className="wrap">
                    <ul>
                        <li className='opt-fun'>
                            <BiSolidTrash className='icon' />
                            <span>Clear finished tasks</span>
                        </li>
                        <li className='opt-fun'>
                            <MdDone className='icon' />
                            <span>Clear act pomodoros</span>
                        </li>
                        <li className='opt-fun'>
                            <BiSolidTrash className='icon' />
                            <span>Clear all tasks</span>
                        </li>
                    </ul>
                </div>

            </section >
        </>
    )
}

export default TaskModal

