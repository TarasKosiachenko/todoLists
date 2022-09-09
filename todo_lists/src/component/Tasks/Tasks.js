import React, { useEffect } from "react";
import "./index.css";
import { useParams } from 'react-router-dom'

import TaskItem from "../TaskItem/TaskItem";

import { axiosGetTasks } from "../../asyncActions/tasks";
import { useDispatch, useSelector } from 'react-redux';

function Tasks() {
  const listId = +useParams().id

  const dispatch = useDispatch()
  const storeTasks = useSelector(state => state.tasks)

  useEffect(() => {
    dispatch(axiosGetTasks(listId))
  }, [dispatch, listId]);

  return (
    <>
      {
        storeTasks?.length > 0 ?
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