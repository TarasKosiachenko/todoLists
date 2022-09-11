import axios from "axios";
import {
  getTasksCustomerAction,
  addTasksCustomerAction,
  updateTasksCustomerAction,
  deleteTasksCustomerAction,
} from "../store/tasks";

export const axiosGetTasks = (listId) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:5000/lists/${listId}/tasks?all=true`)
      .then((response) => dispatch(getTasksCustomerAction(response.data)));
  };
};

export const axiosAddTask = ({ shouldAddValue, ...form }) => {
  return function (dispatch) {
    axios
      .post("http://localhost:5000/tasks", form)
      .then((response) =>
        dispatch(
          addTasksCustomerAction({ ...response.data[0], shouldAddValue })
        )
      );
  };
};

export const axiosUpdateTask = (task) => {
  return function (dispatch) {
    axios
      .patch("http://localhost:5000/tasks/" + task.id, { done: !task.done })
      .then((response) =>
        dispatch(updateTasksCustomerAction(response.data[0]))
      );
  };
};

export const axiosDeleteTask = (id) => {
  return function (dispatch) {
    axios
      .delete("http://localhost:5000/tasks/" + id)
      .then((response) =>
        dispatch(deleteTasksCustomerAction(response.data[0].id))
      );
  };
};

export const axiosGetTodayTasks = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5000/collection/today")
      .then((response) => dispatch(getTasksCustomerAction(response.data)));
  };
};
