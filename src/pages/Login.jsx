import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../redux/adminSlice";
import axios from "axios";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const direccionAnterior =
    location.state !== null ? location.state.direccionAnterior : null;

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [err, setErr] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios({
      method: "post",
      url: `${import.meta.env.VITE_APP_BACK}/admins/token`,
      data: {
        email: emailValue,
        password: passwordValue,
      },
    });
    console.log(response.data);
    if (response.data === "Credenciales incorrectas") {
      return setErr(response.data);
    }
    dispatch(setToken(response.data));
    return navigate("/");
  }

  return (
    <section className="container-fluid login-container">
      <div className="col-12 col-lg-6" id="login-form">
        <h1 id="login-heading">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 input">
            <input
              type="email"
              name="email"
              className="login-input"
              placeholder="Email"
              value={emailValue}
              onChange={(event) => setEmailValue(event.target.value)}
            />
          </div>
          <div className="mb-3 input">
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              value={passwordValue}
              onChange={(event) => setPasswordValue(event.target.value)}
            />
          </div>
          <button type="submit" id="login-button">
            Sign in
          </button>
          {err && (
            <div className="text-danger mt-2 login-alert" role="alert">
              {err}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Login;
