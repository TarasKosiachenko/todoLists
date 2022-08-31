import React from "react";
import "./index.css";
import { Container, Tab, Nav, Row, Col, Button } from "react-bootstrap";

import Lists from "../Lists/Lists"
import Tasks from "../Tasks/Tasks"

export default function Note() {

  function changeTargerRadio(e) {
    console.log(e);
    e.stopPropagation();
    if (e.target.id === "tasks2") {
      document.querySelector(".todo_list").classList.remove("show-done");
    } else if (e.target.id === "tasks1") {
      document.querySelector(".todo_list").classList.add("show-done");
    }
  }

  return (
    <Container>
      <Tab.Container id="left-tabs" defaultActiveKey="myNotes">
        <Row>
          <Col sm={4} className="listSidebar">
            <Nav variant="pills" className="flex-column mt-3">
              <h1>Lists</h1>
              <Lists />
            </Nav>
            <Nav className="mb-3" style={{ justifyContent: 'space-between' }}>
              <div className="mb-2">
                <input className="form-control" type="text" placeholder="Title" />
              </div>
              <div className="mb-2">
                <textarea className="form-control" name="Text1" placeholder="Description" cols="40" rows="5" />
              </div>
              <div className="mb-2">
                <input className="form-control" type="date" />
              </div>

              <Button variant="outline-secondary" onMouseDown={(e) => e.preventDefault()}>
                Submit
              </Button>
            </Nav>
          </Col>

          <Col sm={8} className="text-center">
            <Tab.Content className="mt-3 todo_list">
              <div onClick={changeTargerRadio} className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check check_undone" name="tasks" id="tasks2" defaultChecked />
                <label className="btn btn-outline-secondary" htmlFor="tasks2" >Undone</label>

                <input type="radio" className="btn-check check_all" name="tasks" id="tasks1" />
                <label className="btn btn-outline-secondary" htmlFor="tasks1" >All</label>
              </div>

              <Tasks />

            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
