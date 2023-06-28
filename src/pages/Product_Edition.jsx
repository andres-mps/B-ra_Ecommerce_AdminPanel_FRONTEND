import React from "react";
import "./Product_Edition.css";
import { Switch } from "antd";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { Skeleton } from "antd";

function Product_Edition() {
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
  const [featured, setFeatured] = useState(null);
  const [active, setActive] = useState(null);
  const [description, setDescription] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [altImage, setAltImage] = useState("");

  useEffect(() => {
    async function getProductInfo() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_BACK}/products/${params.product}`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setProduct(response.data);
      setId(response.data.id);
      setName(response.data.name);
      setPrice(response.data.price);
      setStock(response.data.stock);
      setSize(response.data.size);
      setAbv(response.data.abv);
      setCategoryId(response.data.categoryId);
      setFeatured(response.data.featured);
      setActive(response.data.active);
      setDescription(response.data.description);
      setMainImage(response.data.image.main);
      setAltImage(response.data.image.alt);

      // console.log(response.data);
    }
    getProductInfo();
  }, []);

  async function handleUpdate(event) {
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

    await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_APP_BACK}/products/${product.id}`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        //   Authorization: `Bearer ${token}`,
      },
    });
    navigate(-1);
  }

  const handleDelete = () => {
    // e.preventDefault();
    async function deleteProduct() {
      await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_APP_BACK}/products/${product.id}`,
        headers: {
          // Authorization: `Bearer ${token}`,
        },
      });
    }
    deleteProduct();
    navigate("/products");
  };

  return (
    product && (
      <div className="page-wrap">
        <div className="row">
          <div className="col-2 ">
            <Sidebar />
          </div>
          <div className="col-10">
            <div className="content-container">
              {product.length === 0 && <Skeleton active className="mt-3" />}

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

                <div className="col-md-4">
                  <label htmlFor="formFileSm" className="form-label mb-0">
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

                  <label htmlFor="formFileSm" className="form-label mb-0 mt-1">
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

                <div className="col-md-3 ">
                  <div className="product-img-container d-flex flex-row">
                    {/* {product.image.main && (
                      <img
                        className="product-img"
                        src={`${import.meta.env.VITE_APP_BACK_IMG + product.image.main}`}
                        alt=""
                      />
                    )}
                    {product.image.alt && (
                      <img
                        className="product-img"
                        src={`${import.meta.env.VITE_APP_BACK_IMG + product.image.alt}`}
                        alt=""
                      />
                    )} */}
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
                <div className="col-4 col-md-2">
                  <label htmlFor="categoryId" className="form-label  mt-3">
                    Cat Id
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="categoryId"
                    onChange={(event) => setCategoryId(event.target.value)}
                    value={categoryId}
                    name="categoryId"
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

                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <button onClick={handleDelete} className="btn btn-danger mt-3">
                      Delete
                    </button>
                  </div>
                  <div>
                    <NavLink to="/products" className="btn btn-outline-secondary me-2  mt-3">
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

export default Product_Edition;
