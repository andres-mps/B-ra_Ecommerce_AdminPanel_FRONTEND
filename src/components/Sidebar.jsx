import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="admin-nav">
        <NavLink to="/" data-bs-toggle="collapse" className=" text-decoration-none text-white">
          <h3 className="To-Øl text-white text-center mt-2 mb-5">To Øl</h3>
        </NavLink>

        <div id="" className="link-container">
          <NavLink to="/" data-bs-toggle="collapse" className=" text-decoration-none text-white">
            <i className="me-1 bi bi-house fs-5"></i>
            <span className="ms-2 d-none d-xl-inline mb-4">Dashboard</span>
          </NavLink>
        </div>

        <div id="" className="link-container">
          <NavLink
            to="/products"
            data-bs-toggle="collapse"
            className=" text-decoration-none text-white"
          >
            <i className="bi bi-bag fs-5 me-2"></i>
            <span className="ms-2 d-none d-xl-inline mb-4">Products</span>
          </NavLink>
        </div>
        <div id="" className="link-container">
          <NavLink
            to="/orders"
            data-bs-toggle="collapse"
            className=" text-decoration-none text-white"
          >
            <i className="bi bi-cart3 fs-5 me-2"></i>
            <span className="ms-2 d-none d-xl-inline mb-4">Orders</span>
          </NavLink>
        </div>
        <div id="" className="link-container">
          <NavLink
            to="/categories"
            data-bs-toggle="collapse"
            className=" text-decoration-none text-white"
          >
            <i className="me-2 fs-5 bi-list"></i>
            <span className="ms-2 d-none d-xl-inline mb-4">Categories</span>
          </NavLink>
        </div>
        <div id="" className="link-container">
          <NavLink
            to="/admins"
            data-bs-toggle="collapse"
            className=" text-decoration-none text-white"
          >
            <i className="me-2 fs-5 bi-people"></i>
            <span className="ms-2 d-none d-xl-inline mb-4">Admins</span>
          </NavLink>
        </div>
      </div>
      <div className="return-link">
        <NavLink to="/" data-bs-toggle="collapse" className="text-decoration-none text-white">
          <i class="bi bi-arrow-90deg-left"></i>
          <span className="ms-2 d-none d-xl-inline mb-4">Return to website</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
