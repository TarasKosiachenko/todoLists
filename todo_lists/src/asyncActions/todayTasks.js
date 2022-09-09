import axios from "axios";
import { getTodayTasksCustomerAction } from "../store/todayTasks"

export const axiosGetTodayTasks = () => {
    return function (dispatch) {
        axios.get("http://localhost:5000/collection/today")
            .then(response => dispatch(getTodayTasksCustomerAction(response.data)))
    }
}