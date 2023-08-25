
import { SlOptionsVertical } from "react-icons/sl"
import TaskModal from "./Modal/TaskModal"
import { modalContext } from "../features/modalContext"
import { useContext } from "react"
import AddTask from "./AddTask"


function Task() {

    const showTaskModal = useContext(modalContext)
    const setShowTaskModal = useContext(modalContext)

    const handleShowModal = () => {
        setShowTaskModal.setShowTaskModal(!showTaskModal.showTaskModal)
    }

    return (
        <>
            <div className="taskWrapper">
                <TaskModal />
                <div className="TaskHolder">
                    <p className="justTask"> Task </p>


                    <div className="kkWapper">
                        <SlOptionsVertical
                            className="taskOptions"
                            onClick={handleShowModal} />

                    </div>
                </div>
                <AddTask />
            </div>
        </>
    )
}

export default Task