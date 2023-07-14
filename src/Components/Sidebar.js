import React from "react";
import { Col, Nav,Card } from "react-bootstrap";
import { NavLink} from "react-router-dom";
import "./styles.css";

const Sidebar = () => {
  

  return (
    <Col md={3} className="bg-light" style={{ width: "285px", paddingLeft: "0px", paddingRight: "0px" }} >
      <Card className="sidebar-card">
      <Nav className="flex-column my-4 py-4">
        <Nav.Link
          as={NavLink}
          to="/"
          exact
          activeClassName="active"
          className="side-nav mb-2"
        >
          Tenant Setup
        </Nav.Link>

        <Nav.Link
          as={NavLink}
          to="/usermanagement"
          activeClassName="active"
          className="side-nav mb-2"
        >
          User Management
        </Nav.Link>

        <Nav.Link
          as={NavLink}
          to="/extractdocs"
          activeClassName="active"
          className="side-nav mb-2"
        >
          Extract Docs
        </Nav.Link>

        <Nav.Link
          as={NavLink}
          to="/uploaddocs"
          activeClassName="active"
          className="side-nav mb-2"
        >
          Upload Documents
        </Nav.Link>

        <Nav.Link
          as={NavLink}
          to="/monitor"
          activeClassName="active"
          className="side-nav mb-2"
        >
          Monitor
        </Nav.Link>

        <Nav.Link
          as={NavLink}
          to="/help"
          activeClassName="active"
          className="side-nav mb-2"
        >
          Help
        </Nav.Link>
      </Nav>
      </Card>
    </Col>
  );
};

export default Sidebar;
