import React from "react";
import "./Category_Edition.css";
import { Switch } from "antd";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function Category_Edition() {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const params = useParams();

  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [active, setActive] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    async function getCategoryInfo() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_BACK}/categories/admin/${params.category}`,
      });
      setCategory(response.data);
      setId(response.data.id);
      setName(response.data.name);
      setActive(response.data.active);
    }
    getCategoryInfo();
  }, []);

  async function handleUpdate(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("image", image);
    formData.append("active", active);

    await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_APP_BACK}/categories/admin/update/${category.id}`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        //   Authorization: `Bearer ${token}`,
      },
    });
    navigate(-1);
  }

  const handleDelete = (event) => {
    event.preventDefault();
    async function deleteCategory() {
      const response = await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_APP_BACK}/categories/admin/${category.id}`,
        headers: {
          // Authorization: `Bearer ${token}`,
        },
      });
      navigate("/categories");
    }
    deleteCategory();
  };

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
                    placeholder={category.id}
                    name="id"
                  />
                </div>

                <div className="col-md-6">
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
                  <div className="product-img-container"></div>
                </div>
                <div className="col-md-1 d-flex justify-content-between flex-column align-items-center">
                  <label htmlFor="id" className="form-label mt-3">
                    Active
                  </label>
                  <Switch size="small" checked={active} onChange={handleSwitchChange} />
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <button onClick={handleDelete} type="submit" className="btn btn-danger mt-3">
                      Delete
                    </button>
                  </div>

                  <div>
                    <NavLink to="/categories" className="btn btn-outline-secondary me-2  mt-3">
                      Cancel
                    </NavLink>
                    <button type="submit" className="btn btn-success mt-3">
                      Update
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

export default Category_Edition;
