import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Tab } from "react-bootstrap";
import "./index.css";
import { useParams } from 'react-router-dom'

import TaskItem from "../TaskItem/TaskItem";

function Tasks({ responseObj }) {
  const url = "http://localhost:5000/tasks";
  const [tasks, setTasks] = useState(null);
  const listId = +useParams().id

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
      
          <TaskItem key={todo.id} todo={todo} />
       
      ))
      }
    </>
  );
}

export default Tasks;
