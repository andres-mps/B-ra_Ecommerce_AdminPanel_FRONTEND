import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 sticky-top">
      <NavLink
        to="/"
        className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <img
          src="/public/tool_horizontal_logo_19.png"
          alt="Logo"
          style={{ maxWidth: "90px" }}
        />
      </NavLink>
      <ul
        className="nav nav-pills flex-column mb-sm-auto mb-5 align-items-center align-items-sm-start"
        id="menu"
      >
        <li>
          <NavLink
            to="#"
            data-bs-toggle="collapse"
            className="text-decoration-none text-white zpx-0 align-middle"
          >
            <i className="me-1 fs-4 bi-speedometer2"></i>
            <span className="ms-2 d-none d-sm-inline mb-4">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            data-bs-toggle="collapse"
            className=" text-decoration-none text-white px-0 align-middle"
          >
            <i className="me-2  fs-4 bi-table"></i>
            <span className="ms-1 d-none d-sm-inline">Orders</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            data-bs-toggle="collapse"
            className=" text-decoration-none text-white px-0 align-middle"
          >
            <i className="me-2 fs-4 bi-grid"></i>
            <span className="ms-1 d-none d-sm-inline">Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            data-bs-toggle="collapse"
            className=" text-decoration-none text-white px-0 align-middle"
          >
            <i className="me-2 fs-4 bi-list"></i>
            <span className="ms-1 d-none d-sm-inline">Categories</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <i className="me-2 fs-4 bi-people"></i>
            <span className="ms-1 d-none d-sm-inline">Users</span>
          </NavLink>
        </li>
      </ul>
      <div class="dropdown pb-4">
        <a
          href="#"
          class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="hugenerd"
            width="30"
            height="30"
            class="rounded-circle"
          />
          <span class="d-none d-sm-inline mx-1 fixed">Username</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a class="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
