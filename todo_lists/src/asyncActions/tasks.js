import axios from "axios";
import {getTasksCustomerAction} from "../store/tasksReduser"
import {addTasksCustomerAction} from "../store/tasksReduser"

export const axiosGetTasks = () => {
    return function(dispatch) {
        axios.get("http://localhost:5000/tasks")
        .then(response => dispatch(getTasksCustomerAction(response.data)))
    }
}

export const axiosAddTask = (taskBody) => {
    return function(dispatch) {
        axios.post("http://localhost:5000/tasks", taskBody)
        .then(response => dispatch(addTasksCustomerAction(response.data)))
    }
}