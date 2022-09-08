import axios from "axios";
import {
    getTasksCustomerAction,
    addTasksCustomerAction,
    updateTasksCustomerAction,
    deleteTasksCustomerAction
} from "../store/tasksReduser"

export const axiosGetTasks = () => {
    return function (dispatch) {
        axios.get("http://localhost:5000/tasks")
            .then(response => dispatch(getTasksCustomerAction(response.data)))
    }
}

export const axiosAddTask = (taskBody) => {
    return function (dispatch) {
        axios.post("http://localhost:5000/tasks", taskBody)
            .then(response => dispatch(addTasksCustomerAction(response.data[0])))
    }
}

export const axiosUpdateTask = (task) => {
    return function (dispatch) {
        axios.patch("http://localhost:5000/tasks/" + task.id, { done: !task.done })
            .then(response => dispatch(updateTasksCustomerAction(response.data[0])))
    }
}

export const axiosDeleteTask = (id) => {
    return function (dispatch) {
        axios.delete("http://localhost:5000/tasks/" + id)
            .then(response => dispatch(deleteTasksCustomerAction(response.data[0].id)))
    }
}