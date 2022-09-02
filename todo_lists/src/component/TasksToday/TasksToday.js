import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tab } from "react-bootstrap";

import TaskItem from "../TaskItem/TaskItem";

function TasksToday({ responseObj }) {
  const url = "http://localhost:5000/collection/today";

  const [tasksToday, setTasksToday] = useState(null);

  useEffect(() => {
    if (responseObj !== null) {
        setTasksToday((state) => [...state, responseObj]);
    }
  }, [responseObj]);
  
  useEffect(() => {
    axios.get(url).then((response) => {
        setTasksToday(response.data);
    });
  }, []);
  if (!tasksToday) return null;

  return (
    <>
      {
      tasksToday.map((todo) => (
        <Tab.Pane key={todo.id} eventKey={"3"}>
          <TaskItem todo={todo} />
        </Tab.Pane>
      ))
      }
    </>
  );
}

export default TasksToday;