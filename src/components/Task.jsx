
import { SlOptionsVertical } from "react-icons/sl"
import { IoIosAddCircle } from "react-icons/io"
import TaskModal from "./Modal/TaskModal"
import { modalContext } from "../features/modalContext"
import { useContext } from "react"
import AddTaskForm from "./AddTaskForm"


function Task() {

    const showTaskModal = useContext(modalContext)
    const setShowTaskModal = useContext(modalContext)
    const taskForm = useContext(modalContext)
    const setTaskForm = useContext(modalContext)

    // console.log(setTaskForm.setTaskForm)

    const handleShowModal = () => {
        setShowTaskModal.setShowTaskModal(!showTaskModal.showTaskModal)
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

                {!taskForm.taskForm ? (
                    <button className="AddTask"
                        onClick={() => setTaskForm.setTaskForm(!taskForm.taskForm)}>
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