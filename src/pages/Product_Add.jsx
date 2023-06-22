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
  const [catId, setCatId] = useState(0);
  const [featured, setFeatured] = useState(null);
  const [active, setActive] = useState(null);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function handleUpdate(event) {
    event.preventDefault();

    const formData = {
      id,
      name,
      price,
      stock,
      size,
      abv,
      catId,
      description,
      image,
      featured,
      active,
    };
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

  const handleSwitchChange = (checked) => {
    setActive(checked);
  };

  return (
    product && (
      <div className="container-fluid page-wrap">
        <div className="row">
          <div className="col-1 col-md-3 col-xl-2  bg-dark">
            <Sidebar />
          </div>
          <div className="col-11 col-md-9 col-xl-10 ">
            <div className="content-container">
              <h1 className="title">{product.name} </h1>
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
                    readOnly
                    type="id"
                    className="form-control"
                    id="id"
                    placeholder={product.id}
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
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="formFileMultiple" className="form-label">
                    Upload product images:
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple
                    onChange={(event) => setImage(event.target.files[0])}
                  />
                </div>

                <div className="col-md-3  d-flex flex-row">
                  <div className="product-img-container">
                    <img
                      className="product-img"
                      src={`http://localhost:3000/img/${product.image}`}
                      alt=""
                    />
                  </div>
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
                  />
                </div>

                <div className="col-4 col-md-1">
                  <label htmlFor="catId" className="form-label mt-3">
                    Cat Id
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="catId"
                    onChange={(event) => setCatId(event.target.value)}
                    value={catId}
                  />
                </div>

                <div className="col-6 col-md-1 d-flex justify-content-between flex-column align-items-center ">
                  <label htmlFor="featured" className="form-label mt-3">
                    Featured
                  </label>
                  <Switch
                    size="small"
                    defaultChecked={product.featured}
                    onChange={() => setFeatured(!product.featured)}
                  />
                </div>
                <div className="col-6 col-md-1 d-flex justify-content-between flex-column align-items-center">
                  <label htmlFor="id" className="form-label mt-3">
                    Active
                  </label>
                  <Switch size="small" checked={product.active} onChange={handleSwitchChange} />
                </div>

                <div className="col-md-12 ">
                  <label htmlFor="description" className="form-label mt-3">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="content"
                    rows="3"
                    onChange={(event) => setDescription(event.target.value)}
                    value={description}
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
