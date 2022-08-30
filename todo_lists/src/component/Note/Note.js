import React from "react";
import "./index.css";
import { Container, Tab, Nav, Row, Col, Button } from "react-bootstrap";

import Lists from "../Lists/Lists"
import Tasks from "../Tasks/Tasks"

export default function Note() {
  return (
    <Container>
      <Tab.Container id="left-tabs" defaultActiveKey="myNotes">
        <Row>
          <Col sm={4} className="listSidebar">
            <Nav variant="pills" className="flex-column mt-3">
              <h1><a href="">Lists</a></h1>
              <Lists/>
            </Nav>
            <Nav className="mb-3">
              <div className="mb-2">
                <input className="form-control" type="text" placeholder="Title" />
              </div>
              <div className="mb-2">
                <textarea className="form-control" name="Text1" placeholder="Description" cols="40" rows="5"/>
              </div>
              <div className="mb-2">
                <input className="form-control" type="date"/>
              </div>

              <Button variant="outline-secondary" onMouseDown={(e) => e.preventDefault()}>
                Submit
              </Button>
            </Nav>
          </Col>

          <Col sm={8} className="text-center">
            <Tab.Content className="mt-3">


              <Tasks />
              {/* <Tab.Pane eventKey="1">
                <p>My Notes</p>
                <p>My Notes</p>
                <p>My Notes</p>
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <p>My Notes2</p>
                <p>My Notes2</p>
                <p>My Notes2</p>
              </Tab.Pane> */}

            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
