import React, { useEffect } from "react";
import "./index.css";
import { NavLink } from 'react-router-dom'

// import { useDispatch, useSelector } from 'react-redux';
// import { axiosLists } from "../../asyncActions/lists";

function Lists({ storeLists }) {

  // const dispatch = useDispatch()
  // const storeLists = useSelector(state => state.listsReduser.lists)

  // useEffect(() => {
  //   dispatch(axiosLists())
  // }, []);

  return (
    <>
      {
        storeLists?.map((list) => (
          <NavLink to={"/lists/" + (list.id || list.list_id)} key={list.id || list.list_id}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            {list.title}
          </NavLink>
        ))
      }


      {/* {
        lists?.map((list) => (
          <NavLink to={"/lists/" + (list.id || list.list_id)} key={list.id || list.list_id}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            {list.title}
          </NavLink>
        ))
      } */}
    </>
  );
}

export default Lists;