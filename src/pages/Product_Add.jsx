import React from "react";
import "./Product_Edition.css";
import { Switch } from "antd";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function Product_Add() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const params = useParams();

  // inputs:
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [stock, setStock] = useState(null);
  const [size, setSize] = useState("");
  const [abv, setAbv] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [featured, setFeatured] = useState(false);
  const [active, setActive] = useState(false);
  const [description, setDescription] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [altImage, setAltImage] = useState("");

  async function handleCreate(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("size", size);
    formData.append("abv", abv);
    formData.append("categoryId", categoryId);
    formData.append("description", description);
    formData.append("mainImage", mainImage);
    formData.append("altImage", altImage);
    formData.append("featured", featured);
    formData.append("active", active);

    console.log(formData);

    await axios({
      method: "POST",
      url: `http://localhost:3000/products`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        //   Authorization: `Bearer ${token}`,
      },
    });
    navigate(-1);
  }

  return (
    product && (
      <div className="page-wrap">
        <div className="row">
          <div className="col-2 ">
            <Sidebar />
          </div>
          <div className="col-10">
            <div className="content-container">
              <h1 className="title">{product.name} </h1>
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
                    placeholder=""
                    name="id"
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

                <div className="col-md-3">
                  <label htmlFor="formFileSm" className="form-label mb-2">
                    Main image:
                  </label>
                  <input
                    className="form-control form-control-sm"
                    type="file"
                    id="formFileSm"
                    multiple
                    onChange={(event) => setMainImage(event.target.files[0])}
                    name="mainImage"
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="formFileSm" className="form-label mb-2">
                    Alternative image:
                  </label>
                  <input
                    className="form-control form-control-sm"
                    type="file"
                    id="formFileSm"
                    multiple
                    onChange={(event) => setAltImage(event.target.files[0])}
                    name="altImage"
                  />
                </div>

                <div className="col-4 col-md-2">
                  <label htmlFor="price" className="form-label mt-3">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    onChange={(event) => setPrice(event.target.value)}
                    value={price}
                    name="price"
                  />
                </div>
                <div className="col-4 col-md-2">
                  <label htmlFor="stock" className="form-label  mt-3">
                    Stock
                  </label>
                  <input
                    type="number"
                    className={`form-control ${product.stock === 0 ? "text-danger bg-light" : ""}`}
                    id="stock"
                    onChange={(event) => setStock(event.target.value)}
                    value={stock}
                    name="stock"
                  />
                </div>
                <div className="col-4 col-md-2">
                  <label htmlFor="size" className="form-label  mt-3">
                    Size
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="size"
                    onChange={(event) => setSize(event.target.value)}
                    value={size}
                    name="size"
                  />
                </div>
                <div className="col-4 col-md-2">
                  <label htmlFor="abv" className="form-label  mt-3">
                    ABV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="abv"
                    onChange={(event) => setAbv(event.target.value)}
                    value={abv}
                    name="abv"
                  />
                </div>

                <div className="col-4 col-md-1">
                  <label htmlFor="categoryId" className="form-label mt-3">
                    Cat Id
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoryId"
                    onChange={(event) => setCategoryId(event.target.value)}
                    value={categoryId}
                    name="categorId"
                  />
                </div>

                <div className="col-6 col-md-1 d-flex justify-content-between flex-column align-items-center ">
                  <label htmlFor="featured" className="form-label mt-3">
                    Featured
                  </label>
                  <Switch size="small" checked={featured} onChange={() => setFeatured(!featured)} />
                </div>
                <div className="col-6 col-md-1 d-flex justify-content-between flex-column align-items-center">
                  <label htmlFor="id" className="form-label mt-3">
                    Active
                  </label>
                  <Switch size="small" checked={active} onChange={() => setActive(!active)} />
                </div>

                <div className="col-md-12 ">
                  <label htmlFor="description" className="form-label mt-3">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    onChange={(event) => setDescription(event.target.value)}
                    value={description}
                    name="description"
                  ></textarea>
                </div>

                <div className="d-flex flex-row justify-content-end">
                  <div>
                    <NavLink to="/products" className="btn btn-outline-secondary me-2  mt-3">
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

export default Product_Add;
