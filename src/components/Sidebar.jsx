import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="d-flex flex-column pt-2 text-white min-vh-100 align-items-center sticky-top">
      <NavLink
        to="/"
        className="d-flex  pb-3 mb-md-0 me-md-auto text-white text-decoration-none d-none d-md-inline"
      >
        <img src="/public/tool_horizontal_logo_19.png" alt="Logo" style={{ maxWidth: "90px" }} />
      </NavLink>
      <div className="list">
        <ul className=" flex-column mb-sm-auto" id="menu">
          <li>
            <NavLink to="/" data-bs-toggle="collapse" className="text-decoration-none text-white">
              <i class="me-1 bi bi-house fs-5"></i>
              <span className="ms-2 d-none d-lg-inline mb-4">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              data-bs-toggle="collapse"
              className=" text-decoration-none text-white"
            >
              <i class="bi bi-cart3 fs-5 me-2"></i>
              <span className="ms-1 d-none d-lg-inline">Orders</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              data-bs-toggle="collapse"
              className=" text-decoration-none text-white px-0 align-middle"
            >
              <i class="bi bi-bag fs-5 me-2"></i>
              <span className="ms-1 d-none d-lg-inline">Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              data-bs-toggle="collapse"
              className=" text-decoration-none text-white "
            >
              <i className="me-2 fs-5 bi-list"></i>
              <span className="ms-1 d-none d-lg-inline">Categories</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <i className="me-2 fs-5 bi-people"></i>
              <span className="ms-1 d-none d-lg-inline">Admins</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="dropdown pb-4">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="hugenerd"
            width="30"
            height="30"
            className="rounded-circle"
          />
          <span className="d-none d-sm-inline mx-1 fixed">Username</span>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
