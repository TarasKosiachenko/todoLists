import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { useParams } from 'react-router-dom'

import TaskItem from "../TaskItem/TaskItem";

function Tasks({ responseObj }) {
  const url = "http://localhost:5000/tasks/";
  const [tasks, setTasks] = useState([]);
  const listId = +useParams().id

  async function taskDelete(todo) {
    return await axios.delete(url + todo.id)
      .then(() => { setTasks(tasks.filter(task => task.id !== todo.id)) })
  }

  async function changeTaskDone(todo) {
    console.log(todo);
    return await axios.patch("http://localhost:5000/tasks/" + todo.id, { done: !todo.done })
      .then(() => { setTasks(tasks.map(task => task.id === todo.id ? todo : task)) })
  }

  useEffect(() => {
    if (responseObj !== null) {
      setTasks((state) => [...state, responseObj]);
    }
  }, [responseObj]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setTasks(response.data);
    });
  }, []);
  if (!tasks) return null;

  return (
    <>
      {
        tasks.filter(t => t.list_id === listId).map((todo) => (
          <TaskItem key={todo.id} todo={todo} changeTaskDone={changeTaskDone} taskDelete={taskDelete} />
        ))
      }
    </>
  );
}

export default Tasks;
