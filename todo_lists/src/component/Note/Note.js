import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { Route, Routes, NavLink } from "react-router-dom";

import { Container, Tab, Nav, Row, Col, Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";

import Lists from "../Lists/Lists";
import Tasks from "../Tasks/Tasks";
import TasksToday from "../TasksToday/TasksToday";

const baseURL = "http://localhost:5000/dashboard";

export default function Note() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    due_date: null,
    done: false,
    list_id: 2,
  });

  const [responseObj, setResponseObj] = useState(null);
  const [lists, setLists] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLists(response.data.list);
    });
  }, []);

  function handleChange(e) {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  async function postTaskOnServer(taskBody) {
    return await axios
      .post("http://localhost:5000/tasks", taskBody)
      .then((response) => {
        setResponseObj(response.data[0]);
      });
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
    // console.log(e.target[0].value);
    e.preventDefault();
    e.stopPropagation();
    if (form.name.length) {
      postTaskOnServer(form);
      e.target.reset();
    } else {    
    //  e.target[0].value
    }
  }

  return (
    <Container>
      <Tab.Container id="left-tabs" defaultActiveKey="myNotes">
        <Row>
          <Col sm={4} className="listSidebar">
            <Nav variant="pills" className="flex-column mt-3">
              <h1>Lists</h1>

              
              <Lists lists={lists} />

              <NavLink to={"/today"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                  Task Today
              </NavLink>

            </Nav>
            <Nav className="mb-3">
              <form
                name="task"
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
                  {lists?.map((el) => (
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
            </Nav>
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
              <Route path='/lists/:id' element={<Tasks responseObj={responseObj} />}/>
              <Route path={'/today'} element={<TasksToday responseObj={responseObj} />}/>
              </Routes>

            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
