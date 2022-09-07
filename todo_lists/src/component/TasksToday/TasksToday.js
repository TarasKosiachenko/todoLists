import React, { useState, useEffect } from "react";
import axios from "axios";

import TaskItem from "../TaskItem/TaskItem";

function TasksToday({ responseObj }) {
  const url = "http://localhost:5000/collection/today";

  const [tasksToday, setTasksToday] = useState([]);

  useEffect(() => {
    if (responseObj !== null) {
      setTasksToday((state) => [...state, responseObj]);
    }
    axios.get(url).then((response) => {
      setTasksToday(response.data);
    });
  }, [responseObj]);

  async function changeTaskDone(todo) {
    return await axios.patch("http://localhost:5000/tasks/" + todo.id, { done: !todo.done })
      .then(() => { setTasksToday([...tasksToday.filter(task => task.done !== todo.done)]) })
  }

  async function taskDelete(todo) {
    return await axios.delete("http://localhost:5000/tasks/" + todo.id)
      .then(() => { setTasksToday([...tasksToday.filter(task => task.id !== todo.id)]) })
  }

  return (
    <>
      {
        tasksToday.map((todo) => (
          <TaskItem key={todo.id} todo={todo} changeTaskDone={changeTaskDone} taskDelete={taskDelete} />
        ))
      }
    </>
  );
}

export default TasksToday;