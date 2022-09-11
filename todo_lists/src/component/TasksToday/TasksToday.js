import React, { useEffect } from "react";

import TaskItem from "../TaskItem/TaskItem";

import { axiosGetTodayTasks } from "../../asyncActions/tasks";
import { useDispatch, useSelector } from "react-redux";

function TasksToday() {
  const dispatch = useDispatch();
  const storeTodayTasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(axiosGetTodayTasks());
  }, [dispatch]);

  return (
    <>
      <div className="tasks-list">
        {storeTodayTasks.map((todo) => (
          <TaskItem key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
}

export default TasksToday;
