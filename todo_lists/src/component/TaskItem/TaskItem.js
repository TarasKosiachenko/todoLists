import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";

import { axiosDeleteTask } from "../../asyncActions/tasks";
import { axiosUpdateTask } from "../../asyncActions/tasks";

import {
  decrementCounterAction,
  incrementCounterAction,
} from "../../store/dashboardReducer";

import Lists from "../Lists/Lists";

function TaskItem({ todo }) {
  const dispatch = useDispatch();

  function getFormatedDate(date) {
    if (date === null || date === "") {
      return "not specified";
    } else {
      date = new Date(date);
    }
    const values = [
      (date.getDate() < 10 ? "0" : "") + date.getDate(),
      (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1),
      date.getFullYear() - 2000,
    ];
    return values.join(".");
  }

  function handleCheckboxChange() {
    dispatch(axiosUpdateTask(todo));
    if (todo.done) {
      dispatch(incrementCounterAction(todo.list_id));
    } else {
      dispatch(decrementCounterAction(todo.list_id));
    }
  }
  function deleteTask() {
    dispatch(axiosDeleteTask(todo.id));
    if (!todo.done) {
      dispatch(decrementCounterAction(todo.list_id));
    }
  }

  return (
    <>
      <li
        id={todo.id}
        className={
          (new Date(todo.due_date) < new Date(Date.now() - 3600 * 1000 * 24) &&
          todo.due_date !== null
            ? "overdue "
            : "") + (todo.done ? "done" : "")
        }
      >
        <div>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4998 2.33325H3.49984C2.21117 2.33325 1.1665 3.37792 1.1665 4.66659V10.4999C1.1665 11.7886 2.21117 12.8333 3.49984 12.8333H10.4998C11.7885 12.8333 12.8332 11.7886 12.8332 10.4999V4.66659C12.8332 3.37792 11.7885 2.33325 10.4998 2.33325Z"
              stroke="#878787"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.6665 1.16663V3.49996M9.33317 1.16663V3.49996M1.1665 5.83329H12.8332"
              stroke="#878787"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{getFormatedDate(todo.due_date)}</span>
        </div>

        <div>
          <input
            type="checkbox"
            // dispatch(axiosUpdateTask(todo))
            onClick={handleCheckboxChange}
            className={todo.done ? "checkboxTask checked" : "checkboxTask"}
            defaultChecked={todo.done ? "checked" : ""}
          />
          <h5>{todo.name ? todo.name : ""}</h5>
        </div>

        <div>
          <p>{todo.description}</p>
        </div>
        <button
          // dispatch(axiosDeleteTask(todo.id))
          onClick={deleteTask}
          type="button"
          className="btn btn-outline-danger delete_task"
        >
          X
        </button>

        {todo.list ? (
          <div style={{ paddingTop: "0px" }}>
            list:
            <Lists storeLists={[todo.list]} />
          </div>
        ) : (
          ""
        )}
      </li>
    </>
  );
}

export default TaskItem;
