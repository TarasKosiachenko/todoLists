import React from 'react';
import axios from "axios";
import { Tab } from "react-bootstrap";
import "./index.css";

import TaskItem from "../TaskItem/TaskItem"

function Tasks() {
  const [tasks, setTasks] = React.useState(null);

  const url = "http://localhost:5000/tasks";
  React.useEffect(() => {
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
              <TaskItem todo={todo}/>
            </Tab.Pane>
          ))
        }
    </>
  );
}

export default Tasks;