import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  NavDropdown,
  Form,
  Dropdown,
} from "react-bootstrap";
import { BsFillGridFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
function Topbar() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light dark:bg-transparent">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <ul class="navbar-nav navbar-nav-right">
                <Nav.Link href="#" onClick={(event) => event.preventDefault()}>
                  <BsFillGridFill />
                </Nav.Link>

                <Dropdown alignRight as="li" className="nav-item border-left">
                  <Dropdown.Toggle
                    as="a"
                    className="nav-link count-indicator cursor-pointer"
                  >
                    <BsFillBellFill />
                    <span className="count bg-danger"></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                    <h6 className="p-3 mb-0">Notifications</h6>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      className="dropdown-item preview-item"
                      onClick={(evt) => evt.preventDefault()}
                    >
                      <h6 className="mb-0">Actions</h6>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      className="dropdown-item preview-item"
                      onClick={(evt) => evt.preventDefault()}
                    >
                      <h6 className="mb-0">New Actions</h6>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown alignRight as="li" className="nav-item">
                  <Dropdown.Toggle
                    as="a"
                    className="nav-link cursor-pointer no-caret"
                  >
                    <div className="navbar-profile">
                      <img
                        className="img-xs rounded-circle"
                        src={require("../assets/image/836.jpg")}
                        width={35}
                        height={35}
                        alt="profile"
                      />
                      <p className="mb-0 d-none d-sm-block navbar-profile-name">
                        Henry Klein
                      </p>
                      <AiFillCaretDown />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="navbar-dropdown preview-list navbar-profile-dropdown-menu">
                <h6 className="p-3 mb-0">Profile</h6>
                <Dropdown.Divider />
                <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()} className="preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-success"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Settings</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}  className="preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-logout text-danger"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Log Out</p>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
                </Dropdown>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Topbar;
