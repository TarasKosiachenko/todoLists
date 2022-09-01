import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { Container, Tab, Nav, Row, Col, Button } from "react-bootstrap";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import Lists from "../Lists/Lists";
import Tasks from "../Tasks/Tasks";

const baseURL = "http://localhost:5000/dashboard";

export default function Note() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [responseObj, setResponseObj] = useState(null);
  const [lists, setLists] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLists(response.data.list);
    });
  }, []);

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
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
    if (title.length) {
      const taskBody = {
        name: title,
        description: description,
        due_date: date ? date : null,
        done: false,
        list_id: 1,
      };
      postTaskOnServer(taskBody);
      e.target.reset();
    } else {
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
            </Nav>
            <Nav className="mb-3">
              <form name="task" onSubmit={createTasks}>
                <div className="mb-2">
                  <input
                    className="form-control input_name"
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <span className="err_empty_name">enter a task title</span>
                </div>
                <div className="mb-2">
                  <textarea
                    className="form-control"
                    name="Text1"
                    placeholder="Description"
                    cols="40"
                    rows="5"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="form-control"
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <DropdownButton
                    key="up"
                    id={`dropdown-button-drop-up`}
                    drop="up"
                    variant="outline-secondary"
                    title={"List"}
                  >
                    {
                      lists?.map(el => (
                        <Dropdown.Item key={el.id} eventKey={el.id}>{el.title}</Dropdown.Item>
                      ))
                    }
                  </DropdownButton>

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
                  Undone
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

              <Tasks responseObj={responseObj} />
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
