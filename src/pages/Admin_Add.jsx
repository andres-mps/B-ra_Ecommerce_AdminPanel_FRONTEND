import React from "react";
import "./Admin_Edition.css";
import { Switch } from "antd";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

function Admin_Add() {
  const navigate = useNavigate();
  const [admin, setAdmins] = useState([]);
  const params = useParams();
  const token = useSelector((state) => state.admin.token);
  const [err, setErr] = useState(null);

  // inputs:
  const [id, setId] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleUpdate(event) {
    event.preventDefault();

    const formData = {
      id,
      firstname,
      lastname,
      email,
      password,
    };
    console.log(formData);

    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_APP_BACK}/admins/create`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data.err === "err") {
      return setErr(response.data.message);
    }
    setErr(null);
    return navigate(-1);
  }

  return (
    admin && (
      <div className="page-wrap">
        <div className="row">
          <div className="col-2 ">
            <Sidebar />
          </div>
          <div className="col-10">
            <div className="content-container">
              <h1 className="title">{admin.firstname} </h1>
              <form
                className="row g-3"
                encType="multipart/form-data"
                method="PATCH"
                onSubmit={handleUpdate}
              >
                <div className="col-md-4">
                  <label htmlFor="firstname" className="form-label">
                    Firstname
                  </label>
                  <input
                    required
                    type="firstname"
                    className="form-control"
                    onChange={(event) => setFirstname(event.target.value)}
                    value={firstname}
                    id="firstname"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="lastname" className="form-label">
                    Lastname
                  </label>
                  <input
                    required
                    type="lastname"
                    className="form-control"
                    onChange={(event) => setLastname(event.target.value)}
                    value={lastname}
                    id="lastname"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    id="email"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    id="password"
                  />
                </div>

                <div className="d-flex flex-row justify-content-end">
                  <div>
                    <NavLink
                      to="/categories"
                      className="btn btn-outline-secondary me-2  mt-3"
                    >
                      Cancel
                    </NavLink>
                    <button type="submit" className="btn btn-success mt-3">
                      Save
                    </button>
                  </div>
                </div>
              </form>
              {err && (
                <div class="text-danger mt-2 login-alert" role="alert">
                  {err}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Admin_Add;
