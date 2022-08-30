import React from "react";
import "./index.css";
import axios from "axios";
import { Nav } from "react-bootstrap";

const baseURL = "http://localhost:5000/dashboard";

function Lists() {
  const [lists, setLists] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLists(response.data.list);
    });
  }, []);
  if (!lists) return null;

  return (
    <>
      {
        lists.map((list) => (
          <Nav.Item key={list.id}>
            <Nav.Link eventKey={list.id}>{list.title}</Nav.Link>
          </Nav.Item>
        ))
      }
    </>
  );
}

export default Lists;
