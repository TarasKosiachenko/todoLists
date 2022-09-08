import React, { useEffect } from "react";

import TaskItem from "../TaskItem/TaskItem";

import { axiosGetTodayTasks } from "../../asyncActions/todayTasks";
import { useDispatch, useSelector } from 'react-redux';

function TasksToday() {

  const dispatch = useDispatch()
  const storeTodayTasks = useSelector(state => state.todayTasksReduser.todayTasks)

  useEffect(() => {
    dispatch(axiosGetTodayTasks())
  }, [dispatch]);

  return (
    <>
      {
        storeTodayTasks.map((todo) => (
          <TaskItem key={todo.id} todo={todo} />
        ))
      }
    </>
  );
}

export default TasksToday;