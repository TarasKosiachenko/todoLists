import React from 'react';
import axios from "axios";
import { Tab } from "react-bootstrap";
import "./index.css";

import TaskItem from "../TaskItem/TaskItem"

const baseURL = "http://localhost:5000/tasks";

function Tasks() {
  const [tasks, setTasks] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTasks(response.data);
    });
  }, []);

  if (!tasks) return null;

  console.log("tasks", tasks);

  return (
    <>
      {
        tasks.map((todo) => (
          <Tab.Pane key={todo.id} eventKey={todo.list_id}>
            <TaskItem todo={todo}/>
          </Tab.Pane>
        ))
      }
    </>
  );
}

export default Tasks;