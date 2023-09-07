import { useMutation, useQuery, useQueryClient } from "react-query";
import { addTask, allTasks } from "./api";
import { toast } from "react-toastify";


const errStyles = {
    position: "topright",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
}


export const useAllTasks = () => {

    const { data, error, ...rest } = useQuery({
        queryFn:  allTasks,
        queryKey : ['Tasks']
    })
    if(error){
          console.log(`=================
        ${error?.response?.data?.message || "An error occurred"}
    ===================`);
    }

    return {data , ...rest }
}


export const useAddTask = () => {
    const queryClient = useQueryClient();

    const { data, ...rest } = useMutation({
        mutationFn : (newData) =>  addTask(newData),
        onSuccess: (response) => {
            queryClient.invalidateQueries({ queryKey: ["Todos"] })
            toast.success('New task added successfully',response, { /* ...toast options */ })
    },
    onError: err => toast.error(err?.response?.data?.message || err?.message, { ...errStyles })

    })

    return {data, ...rest}
}