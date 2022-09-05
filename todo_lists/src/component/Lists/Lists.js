import React from "react";
import "./index.css";
import { NavLink } from 'react-router-dom'

function Lists({ lists }) {

  return (
    <>
      {
        lists?.map((list) => (
          <NavLink to={"/lists/" + (list.id || list.list_id)} key={list.id || list.list_id}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            {list.title}
          </NavLink>
        ))
      }
    </>
  );
}

export default Lists;