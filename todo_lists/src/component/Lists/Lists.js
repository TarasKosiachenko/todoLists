import React from "react";
import "./index.css";
import { NavLink } from 'react-router-dom'

function Lists({ storeLists }) {

  return (
    <>
      {
        storeLists?.map((list) => (
          <NavLink to={"/lists/" + (list.id || list.list_id)} key={list.id || list.list_id}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            {list.title} <p>{list.undone}</p>
          </NavLink>
        ))
      }
    </>
  );
}

export default Lists;