import React from "react";
import "./Admin_Edition.css";
import { Switch } from "antd";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

function Admin_Edition() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState([]);
  const params = useParams();

  const [id, setId] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState(null);

  useEffect(() => {
    async function getAdminInfo() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_BACK}/admins/${params.id}`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setAdmin(response.data);
      setId(response.data.id);
      setFirstname(response.data.firstname);
      setLastname(response.data.lastname);
      setEmail(response.data.email);
      setPassword(response.data.password);
    }
    getAdminInfo();
  }, []);

  async function handleUpdate(event) {
    event.preventDefault();

    const formData = {
      id,
      firstname,
      lastname,
      email,
      password,
    };
    //console.log(formData);

    const response = await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_APP_BACK}/admins/update/${admin.id}`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        //   Authorization: `Bearer ${token}`,
      },
    });
    if (response.data.err === "err") {
      return setErr(response.data.message);
    }
    setErr(null);
    return navigate(-1);
  }

  async function handleDelete(event) {
    event.preventDefault();
    const response = await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_APP_BACK}/admins/${admin.id}`,
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    });
    if (response.data.err === "err") {
      return setErr(response.data.message);
    }
    setErr(null);
    return navigate("/admins");
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
                <div className="col-md-1">
                  <label htmlFor="id" className="form-label">
                    Id
                  </label>
                  <input
                    disabled
                    readonly
                    type="id"
                    className="form-control"
                    id="id"
                    placeholder={admin.id}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    onChange={(event) => setFirstname(event.target.value)}
                    value={firstname}
                    id="firstname"
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="lastname" className="form-label">
                    Lastname
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    onChange={(event) => setLastname(event.target.value)}
                    value={lastname}
                    id="lastname"
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    id="email"
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(event) => setPassword(event.target.value)}
                    id="password"
                  />
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <button
                      onClick={handleDelete}
                      className="btn btn-danger mt-3"
                    >
                      Delete
                    </button>
                  </div>

                  <div>
                    <NavLink
                      to="/admins"
                      className="btn btn-outline-secondary me-2  mt-3"
                    >
                      Cancel
                    </NavLink>
                    <button type="submit" className="btn btn-success mt-3">
                      Update
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

export default Admin_Edition;
