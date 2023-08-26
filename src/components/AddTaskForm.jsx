import { useContext, useState } from "react"
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi"
import { IoMdAdd } from "react-icons/io"
import { modalContext } from "../features/modalContext"

function AddTaskForm() {


    const taskForm = useContext(modalContext)
    const setTaskForm = useContext(modalContext)
    const close = taskForm.taskForm


    const [title, setTitle] = useState("")
    const [count, setCount] = useState(1)
    const [note, setNote] = useState("")

    const [showNote, setShowNote] = useState(false)

    const handleFormClose = (e) => {
        e.preventDefault()
        setTaskForm.setTaskForm(!taskForm.taskForm)
    }

    return (
        <>
            <section className={`AddTaskForm ${close ? 'show' : 'hidden'}`}>
                <form action="">
                    <input
                        type="text"
                        value={title}
                        className="inputTitle"
                        placeholder="What are you working on?"
                        onChange={(e) => { setTitle(e.target.value) }}
                    />

                    <div className="countSection">
                        <input
                            className="inputCount"
                            type="number"
                            value={count}
                        />
                        <BiSolidUpArrow className="increaseCount" onClick={() => { setCount(count + 1) }} />
                        <BiSolidDownArrow className="reduceCount" onClick={() => { setCount(count - 1) }} />
                    </div>


                    {showNote && (

                        <textarea
                            className="addNote"
                            placeholder="Some notes..."
                            value={note}
                            onClick={(e) => setNote(e.target.value)}
                        ></textarea>
                    )}

                    <div className="addNoteWrapper">
                        <span className="addNoteBtn"
                            onClick={() => setShowNote(!showNote)} ><IoMdAdd className='addPlus' /> <span>Add Note</span></span>
                        <span className="addProjectBtn"><IoMdAdd className='addPlus' /> <span>Add Project</span></span>
                    </div>

                    <div className="formBtns">
                        <button
                            className="cancleTask"
                            onClick={handleFormClose}
                        >Cancel</button>
                        <button className="SaveTask" type="submit">Save </button>
                    </div>


                </form>
            </section >
        </>
    )
}

export default AddTaskForm