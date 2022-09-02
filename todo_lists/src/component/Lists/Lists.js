import React from "react";
import "./index.css";
import { Nav } from "react-bootstrap";

function Lists({ lists }) {

  return (
    <>
      {
        lists?.map((list) => (
          <Nav.Item key={list.id || list.list_id}>
            <Nav.Link eventKey={list.list_id || list.id}>
              {list.title}
            </Nav.Link>
          </Nav.Item>
        ))
      }
    </>
  );
}

export default Lists;
