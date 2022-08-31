import React from 'react';
import "./index.css";

function changeTargetInput(e) {
  console.log(e);
  e.stopPropagation();
  if (e.target.className === "checkboxTask" || e.target.className === "checkboxTask checked") {
    e.currentTarget.classList.toggle('done')
    console.log(e.currentTarget);
    // const t = todos.find((t) => t.id === Number(e.currentTarget.id));
    // const todo = {
    //   done: !t.done,
    // };
    // updateServerTask(Number(e.currentTarget.id), todo).then(() => {
    //   renderList(todoList, todos);
      // isEmptyList();
    // });
  }
}

function TaskItem(todo) {
  return (
    <>
      <li onClick={changeTargetInput} id={todo.todo.id}
       className={(new Date(todo.todo.due_date) < Date.now() ? "overdue " : "") + 
       (todo.todo.done ? "done" : "")}>
        <div>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.4998 2.33325H3.49984C2.21117 2.33325 1.1665 3.37792 1.1665 4.66659V10.4999C1.1665 11.7886 2.21117 12.8333 3.49984 12.8333H10.4998C11.7885 12.8333 12.8332 11.7886 12.8332 10.4999V4.66659C12.8332 3.37792 11.7885 2.33325 10.4998 2.33325Z" stroke="#878787" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.6665 1.16663V3.49996M9.33317 1.16663V3.49996M1.1665 5.83329H12.8332" stroke="#878787" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{todo.todo.due_date}</span>
        </div>

        <div>
          <input type="checkbox" className={todo.todo.done ? "checkboxTask checked" : "checkboxTask"} defaultChecked={todo.todo.done ? "checked" : ""} />
          <h5>{todo.todo.name ? todo.todo.name : ""}</h5>
        </div>

        <div>
          <p>{todo.todo.description}</p>
        </div>
        <button type="button" className="btn btn-outline-danger delete_task">X</button>
      </li>
    </>
  );
}

export default TaskItem;