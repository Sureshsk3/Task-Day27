import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Topbar() {
  const { pathname } = useLocation();
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{ height: "70px" }}>
      <Container>
        <Nav className="me-auto">
          <Link to="/" className={pathname === "/" ? "active" : "inactive"}>
            <Nav.Item>Home</Nav.Item>
          </Link>
          <Link
            to="/add-user"
            className={pathname === "/add-user" ? "active" : "inactive"}
          >
            <Nav.Item>Add User</Nav.Item>
          </Link>
          <Link
            to="/view-user"
            className={pathname === "/view-user" ? "active" : "inactive"}
          >
            <Nav.Item>View User</Nav.Item>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Topbar;
