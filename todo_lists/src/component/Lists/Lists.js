import React from "react";
import "./index.css";
import { Nav } from "react-bootstrap";

function Lists({ lists }) {

  return (
    <>
      {
        lists?.map((list) => (
          <Nav.Item key={list.id}>
            <Nav.Link eventKey={list.id}>
              {list.title}
            </Nav.Link>
          </Nav.Item>
        ))
      }
    </>
  );
}

export default Lists;
