import axios from "axios";

const baseUrl = 'http://localhost:3000/tasks'


const instance  = axios.create( {
    baseURL : baseUrl
})


// getters

export const allTasks = async () => {
  try {
    const response = await instance.get('/');
    return response.data;
  } catch (error) {
    console.error(
      `An error occurred while fetching tasks: ${error.message}`
    );
    throw error;
  }
};

export const addTask = (taskData) => {
    const url  = `/`
    return instance.post(url, taskData)
    .then(res => res?.data)
    .catch((err) => {
      console.error('Error adding task:', err?.message);
      throw err; // You can throw the error to handle it elsewhere
    });
}