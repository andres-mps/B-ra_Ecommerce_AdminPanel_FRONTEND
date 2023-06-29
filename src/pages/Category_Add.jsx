import React from "react";
import "./Category_Edition.css";
import { Switch } from "antd";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function Category_Add() {
  const navigate = useNavigate();
  const [category, setCategories] = useState([]);
  const params = useParams();

  // inputs:
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);
  const [image, setImage] = useState("");

  async function handleCreate(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("image", image);
    formData.append("active", active);

    await axios({
      method: "POST",
      url: `${import.meta.env.VITE_APP_BACK}/categories/admin/create`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        //   Authorization: `Bearer ${token}`,
      },
    });
    navigate(-1);
  }

  const handleSwitchChange = (checked) => {
    setActive(checked);
  };

  return (
    category && (
      <div className="page-wrap">
        <div className="row">
          <div className="col-2 ">
            <Sidebar />
          </div>
          <div className="col-10">
            <div className="content-container">
              <h1 className="title">{category.name} </h1>
              <form
                className="row g-3"
                encType="multipart/form-data"
                method="PATCH"
                onSubmit={handleCreate}
              >
                <div className="col-md-1">
                  <label htmlFor="id" className="form-label">
                    Id
                  </label>
                  <input
                    disabled
                    readOnly
                    type="id"
                    className="form-control"
                    id="id"
                    name="id"
                    placeholder={category.id}
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    id="name"
                    name="name"
                  />
                </div>

                <div className="col-md-4">
                  <label for="formFileMultiple" className="form-label">
                    Upload category image:
                  </label>
                  <input
                    className="form-control form-control-sm"
                    type="file"
                    id="formFileSm"
                    multiple
                    onChange={(event) => setImage(event.target.files[0])}
                    name="image"
                  />
                </div>

                <div className="col-md-3  d-flex flex-row">
                  <div className="product-img-container">
                    <img
                      className="product-img"
                      src={`${import.meta.env.VITE_APP_BACK_IMG + category.image}`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-6 col-md-1 d-flex justify-content-between flex-column align-items-center">
                  <label htmlFor="id" className="form-label mt-3">
                    Active
                  </label>
                  <Switch size="small" checked={category.active} onChange={handleSwitchChange} />
                </div>

                <div className="d-flex flex-row justify-content-end">
                  <div>
                    <NavLink to="/categories" className="btn btn-outline-secondary me-2  mt-3">
                      Cancel
                    </NavLink>
                    <button type="submit" className="btn btn-success mt-3">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Category_Add;
