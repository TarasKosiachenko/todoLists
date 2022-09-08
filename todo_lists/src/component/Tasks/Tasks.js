import React from "react";
import "./index.css";
import { useParams } from 'react-router-dom'

import TaskItem from "../TaskItem/TaskItem";


function Tasks({ storeTasks }) {
  const listId = +useParams().id

  return (
    <>
    {
      storeTasks.length > 0 ?
      <div>
        {
          storeTasks.filter(t => t.list_id === listId).map((todo) => (
            <TaskItem key={todo.id} todo={todo} />
          ))
        }
      </div>
      :
      <div>
        Tasks list empty!
      </div>
    }
    </>
  );
}

export default Tasks;