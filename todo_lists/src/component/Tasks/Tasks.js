import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tab } from "react-bootstrap";
import "./index.css";

import TaskItem from "../TaskItem/TaskItem";

function Tasks({ responseObj }) {
  const url = "http://localhost:5000/tasks";
  const [tasks, setTasks] = useState(null);

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
      tasks.map((todo) => (
        <Tab.Pane key={todo.id} eventKey={todo.list_id}>
          <TaskItem todo={todo} />
        </Tab.Pane>
      ))
      }
    </>
  );
}

export default Tasks;
