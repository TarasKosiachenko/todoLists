import React, { useState, useEffect } from "react";
import "./index.css";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import { Container, Tab, Nav, Row, Col, Button, Form } from "react-bootstrap";

import HomePage from "../HomePage/HomePage";
import Lists from "../Lists/Lists";
import Tasks from "../Tasks/Tasks";
import TasksToday from "../TasksToday/TasksToday";

import { axiosAddTask } from "../../asyncActions/tasks";
import { axiosGetLists } from "../../asyncActions/lists";

import { useDispatch, useSelector } from 'react-redux';

export default function Note() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    due_date: null,
    done: false,
    list_id: 2,
  });

  const dispatch = useDispatch()
  const storeLists = useSelector(state => state.dashboard.lists)

  useEffect(() => {
    dispatch(axiosGetLists())
  }, [dispatch]);

  function handleChange(e) {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function changeTargerRadio(e) {
    e.stopPropagation();
    if (e.target.id === "tasks2") {
      document.querySelector(".todo_list").classList.remove("show-done");
    } else if (e.target.id === "tasks1") {
      document.querySelector(".todo_list").classList.add("show-done");
    }
  }

  function createTasks(e) {
    e.preventDefault();
    e.stopPropagation();
    if (form.name.length) {
      dispatch(axiosAddTask(form))
      e.target.reset();
    } else {
      e.target[0].className = 'form-control emptyInput'
      setTimeout(() => e.target[0].className = 'form-control', 2000);
    }
  }

  return (
    <Container>
      <Tab.Container id="left-tabs" defaultActiveKey="myNotes">
        <Row>
          <Col sm={4} className="listSidebar">

            <Nav variant="pills" className="flex-column mt-3">
              <Link to={"/"}><h1>Lists</h1></Link>
              <Lists storeLists={storeLists} />
              <NavLink to={"/today"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Task Today</NavLink>
            </Nav>
            <form
              name="task"
              className="mb-3"
              onSubmit={createTasks}
              style={{ width: "100%" }}
            >
              <div className="mb-2">
                <input
                  className="form-control input_name"
                  type="text"
                  placeholder="Title"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <textarea
                  className="form-control"
                  name="description"
                  placeholder="Description"
                  cols="40"
                  rows="5"
                  onChange={handleChange}
                />
              </div>
              <Form.Select className="mb-2" name="list_id" onChange={handleChange}>
                {storeLists?.map((el) => (
                  <option key={el.id} value={el.id}>
                    {el.title}
                  </option>
                ))}
              </Form.Select>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <input
                    className="form-control"
                    name="due_date"
                    type="date"
                    style={{ width: "140px" }}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  variant="outline-secondary"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  Create
                </Button>
              </div>
            </form>
          </Col>

          <Col sm={8} className="text-center">
            <Tab.Content className="mt-3 todo_list">
              <div
                onClick={changeTargerRadio}
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check check_undone"
                  name="tasks"
                  id="tasks2"
                  defaultChecked
                />
                <label className="btn btn-outline-secondary" htmlFor="tasks2">
                  Open
                </label>

                <input
                  type="radio"
                  className="btn-check check_all"
                  name="tasks"
                  id="tasks1"
                />
                <label className="btn btn-outline-secondary" htmlFor="tasks1">
                  All
                </label>
              </div>

              <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path='/lists/:id' element={<Tasks />} />

                <Route path={'/today'} element={<TasksToday />} />
              </Routes>

            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
