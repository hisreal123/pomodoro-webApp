
import { SlOptionsVertical } from "react-icons/sl"
import { IoIosAddCircle } from "react-icons/io"
import TaskModal from "./Modal/TaskModal"
import { modalContext } from "../features/modalContext"
import { useContext } from "react"
import AddTaskForm from "./AddTaskForm"
import { useAllTasks } from "../core/hooks"
import { MdOutlineDone } from "react-icons/md"


function Task() {

    const { data: tasks } = useAllTasks()

    console.log(tasks)

    const { showTaskModal,
        setShowTaskModal,
        taskForm,
        setTaskForm } = useContext(modalContext)

    const handleShowModal = () => {
        setShowTaskModal(!showTaskModal)
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

                {/* AllTasks */}
                {tasks?.map(task => (
                    <>
                        <div className="taskList" key={task.id}>
                            <MdOutlineDone className="taskDone" />
                            <h4 className="title">{task.title}</h4>
                        </div>
                    </>
                ))}
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
            </div>
        </>
    )
}

export default Task