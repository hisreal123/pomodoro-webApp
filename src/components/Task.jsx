
import { SlOptionsVertical } from "react-icons/sl"
import { IoIosAddCircle } from "react-icons/io"
import TaskModal from "./Modal/TaskModal"
import { modalContext } from "../features/modalContext"
import { useContext, useState } from "react"
import AddTaskForm from "./AddTaskForm"
import { useAllTasks } from "../core/hooks"
import { MdOutlineDone } from "react-icons/md"
import { CiMenuKebab } from "react-icons/ci"
import { IoMdAdd } from "react-icons/io"




function Task() {

    const { data: tasks } = useAllTasks()

    const [editMode, setEditMode] = useState(false);
    const [editTask, setEditTask] = useState(null);
    const [showNote, setShowNote] = useState(false)
    const [taskState, setTaskState] = useState({})

    console.log(taskState)

    const { showTaskModal,
        setShowTaskModal,
        taskForm,
        setTaskForm } = useContext(modalContext)

    const handleShowModal = () => {
        setShowTaskModal(!showTaskModal)
    }

    const handleTaskClick = (task) => {
        setEditTask(task);
        setEditMode(!editMode)

        if (!taskState[task.id]) {
            setTaskState({ ...taskState, [task.id]: { title: task.title, note: task.note } })
        }
    };

    const handleCloseEdit = (e) => {
        e.preventDefault();

        const result = window.confirm("A change will be lost, Are you sure you want to close it ?")
        result && setEditMode(false)
    }

    const handleUpdateForm = async (e) => {
        e.preventDefault();


        // tasks.forEach((task) => {
        //     if (taskState[task.id]) {
        //         task.title = taskState[task.id].title
        //         task.note = taskState[task.id].note
        //     }
        // })


        setEditTask(null);
        setEditMode(!editMode)
    }

    // style
    const deleteButtonStyle = {
        color: 'rgba(29, 28, 28, 0.363)',
        border: 0,
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: ' .9rem',
    }

    return (
        <>
            <div className="taskWrapper">
                <div className="TaskHolder">
                    <p className="justTask"> Task </p>

                    <div className="kkWapper">
                        <SlOptionsVertical
                            className="taskOptions"
                            onClick={handleShowModal} />
                        <TaskModal />
                    </div>
                </div>


                <div className="oo">
                    {tasks?.map((task) => (
                        <div key={task.id}>
                            {editMode && editTask == task ?
                                (
                                    // Edit Form
                                    <div className="AddTaskForm">
                                        <form action="" onSubmit={handleUpdateForm}>
                                            <input
                                                type="text"
                                                value={taskState[task.id]?.title || ''}
                                                className="inputTitle"
                                                placeholder="What are you working on?"
                                                onChange={(e) => {
                                                    setTaskState({
                                                        ...taskState,
                                                        [task.id]: {
                                                            ...taskState[task.id],
                                                            title: e.target.value,
                                                        },
                                                    });
                                                }}
                                            />

                                            {showNote && (
                                                <textarea
                                                    className="addNote"
                                                    placeholder="Some notes..."
                                                    value={taskState[task.id]?.note || ''}
                                                    onChange={(e) => {
                                                        setTaskState({
                                                            ...taskState,
                                                            [task.id]: {
                                                                ...taskState[task.id],
                                                                note: e.target.value,
                                                            },
                                                        });
                                                    }}
                                                ></textarea>
                                            )}

                                            <div className="addNoteWrapper">
                                                <span className="addNoteBtn"
                                                    onClick={() => setShowNote(!showNote)} ><IoMdAdd className='addPlus' /> <span>Add Note</span></span>
                                                {/* <span className="addProjectBtn"><IoMdAdd className='addPlus' /> <span>Add Project</span></span> */}
                                            </div>

                                            <div className="formBtns" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <button style={deleteButtonStyle}>Delete</button>
                                                <div className="wrap">

                                                    <button
                                                        className="cancleTask"
                                                        onClick={handleCloseEdit}
                                                    >Cancel</button>
                                                    <button className="SaveTask" type="submit">Save </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                ) : (
                                    // Task Item
                                    <div className="wrapp">
                                        <div className="taskList">
                                            <div className="inWrap" onClick={() => handleTaskClick(task)}>
                                                <MdOutlineDone className="taskDone" />
                                                <h4 className="title">{task.title}</h4>
                                            </div>
                                            <CiMenuKebab onClick={() => handleTaskClick(task)} />
                                        </div>
                                    </div>
                                )}
                        </div>
                    ))}
                </div>

                {/* End of all task */}

                {!taskForm ? (
                    <button className="AddTask"
                        onClick={() => setTaskForm(!taskForm)}>
                        <span>
                            <IoIosAddCircle className="icon" />
                        </span>
                        <h5>Add Task</h5>
                    </button>
                ) : (
                    <AddTaskForm />
                )}

            </div >
        </>
    )
}

export default Task






