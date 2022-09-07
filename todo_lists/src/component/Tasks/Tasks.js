import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { useParams } from 'react-router-dom'

import TaskItem from "../TaskItem/TaskItem";



import { axiosGetTasks } from "../../asyncActions/tasks";
import { useDispatch, useSelector } from 'react-redux';


function Tasks({ responseObj }) {
  const listId = +useParams().id

  const dispatch = useDispatch()
  const storeTasks = useSelector(state => state.tasksReduser.tasks)


  // const url = "http://localhost:5000/tasks/";
  // const [tasks, setTasks] = useState([]);



  // async function taskDelete(todo) {
  //   return await axios.delete(url + todo.id)
  //     .then(() => { setTasks(tasks.filter(task => task.id !== todo.id)) })
  // }

  // async function changeTaskDone(todo) {
  //   console.log(todo);
  //   return await axios.patch(url + todo.id, { done: !todo.done })
  //     .then(() => { setTasks(tasks.map(task => task.id === todo.id ? todo : task)) })
  // }


  // useEffect(() => {
  //   if (responseObj !== null) {
  //     setTasks((state) => [...state, responseObj]);
  //   }
  // }, [responseObj]);


  useEffect(() => {
    dispatch(axiosGetTasks())
  }, []);


  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     setTasks(response.data);
  //   });
  // }, []);
  // if (!tasks) return null;

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

      {/* {
        tasks.filter(t => t.list_id === listId).map((todo) => (
          <TaskItem key={todo.id} todo={todo} changeTaskDone={changeTaskDone} taskDelete={taskDelete} />
        ))
      } */}
    </>
  );
}

export default Tasks;