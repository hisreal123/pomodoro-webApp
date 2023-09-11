import { useContext, useState } from "react"
import { IoMdAdd } from "react-icons/io"
import { modalContext } from "../features/modalContext"
import { useAddTask } from "../core/hooks"
import { v1 as uuidv1 } from 'uuid';


function AddTaskForm() {

    const { mutate: createTask } = useAddTask();
    const { taskForm, setTaskForm } = useContext(modalContext)

    const [taskState, setTaskState] = useState({
        title: "",
        note: ""
    })

    const [showNote, setShowNote] = useState(false)

    const handleSubmitTask = async (e) => {
        e.preventDefault()
        setTaskForm(!taskForm)

        const title = taskState.title
        const note = taskState.note

        if (title) {

            const newTask = {
                id: uuidv1(),
                title: title,
                completed: false,
                note: note
            };

            try {
                await createTask(newTask);
                console.log(' Task sent  .....');
            } catch (error) {
                console.error(error);
            }
        }

        // setTaskState({ ...taskState });
    }

    return (
        <>
            <section className={`AddTaskForm ${taskForm ? 'show' : 'hidden'}`}>
                <form action="" onSubmit={handleSubmitTask}>
                    <input
                        type="text"
                        value={taskState.title || ""}
                        className="inputTitle"
                        placeholder="What are you working on?"
                        onChange={e => {
                            setTaskState({ ...taskState, title: e.target.value })
                        }}
                    />

                    {showNote && (
                        <textarea
                            className="addNote"
                            placeholder="Some notes..."
                            value={taskState.note || ""}
                            onChange={(e) => {
                                setTaskState({ ...taskState, note: e.target.value })
                            }}
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
                            onClick={e => {
                                e.preventDefault()
                                setTaskForm(!taskForm)
                            }}
                        >Cancel</button>
                        <button className="SaveTask" type="submit">Save </button>
                    </div>
                </form>
            </section >
        </>
    )
}

export default AddTaskForm