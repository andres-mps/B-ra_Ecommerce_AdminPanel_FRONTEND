import React from "react";
import "./Product_Edition.css";
import { Switch } from "antd";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

function Product_Edition() {
  const [product, setProduct] = useState([]);
  const params = useParams();
  console.log(params.product);

  useEffect(() => {
    async function getProductInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/products/${params.product}`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setProduct(response.data);
      console.log(response.data);
    }
    getProductInfo();
  }, []);

  return (
    product && (
      <div className="container table-container">
        <form className="row g-3 ">
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
              placeholder={product.id}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputEmail4" className="form-label">
              Name
            </label>
            <input type="email" className="form-control" value={product.name} id="inputEmail4" />
          </div>

          <div className="col-md-4">
            <label for="formFileMultiple" class="form-label">
              Upload product images:
            </label>
            <input class="form-control" type="file" id="formFileMultiple" multiple />
          </div>

          <div className="col-md-3  d-flex flex-row">
            <div className="product-img-container">
              <img className="product-img" src={product.image} alt="" />
            </div>
            <div className="product-img-container">
              <img className="product-img" src="/public/Beach-Side.webp" alt="" />
            </div>
          </div>

          <div className="col-4 col-md-1">
            <label htmlFor="id" className="form-label mt-3">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="id"
              value={product.price}
              placeholder="20,50"
            />
          </div>
          <div className="col-4 col-md-1">
            <label htmlFor="id" className="form-label  mt-3">
              Stock
            </label>
            <input
              type="number"
              className={`form-control ${product.stock === 0 ? "text-danger bg-light" : ""}`}
              id="id"
              value={product.stock}
              placeholder="2"
            />
          </div>
          <div className="col-4 col-md-1">
            <label htmlFor="id" className="form-label  mt-3">
              Size
            </label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={product.size}
              placeholder="2"
            />
          </div>
          <div className="col-4 col-md-1">
            <label htmlFor="id" className="form-label  mt-3">
              ABV
            </label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={product.abv}
              placeholder="5.7%"
            />
          </div>

          <div className="col-4 col-md-1">
            <label htmlFor="id" className="form-label mt-3">
              Cat Id
            </label>
            <input
              type="text"
              className="form-control"
              id="id"
              // value={product.category.id}
              placeholder="2"
            />
          </div>
          <div className="col-4 col-md-1">
            <label htmlFor="id" className="form-label mt-3">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="id"
              // value={product.category.name}
              placeholder="2"
            />
          </div>
          <div className="col-md-1 d-flex justify-content-between flex-column align-items-center ">
            <label htmlFor="id" className="form-label mt-3">
              Featured
            </label>
            <Switch size="small" defaultChecked={product.featured} onChange={onChange} />
          </div>
          <div className="col-md-1 d-flex justify-content-between flex-column align-items-center">
            <label htmlFor="id" className="form-label mt-3">
              Active
            </label>
            <Switch size="small" defaultChecked={product.active} onChange={onChange} />
          </div>

          <div class="col-md-12 ">
            <label for="text" class="form-label mt-3">
              Description
            </label>
            <textarea
              class="form-control"
              id="text"
              name="content"
              placeholder="This is an imperial stout with eight different types of malt that pushes all the boundaries - a little bit sweet, a little bit smoky, a little roasty, and a lot of chocolate with added roasted orange peel and cardamom."
              rows="3"
              value={product.description}
            ></textarea>
          </div>

          <div className="d-flex flex-row justify-content-between">
            <div>
              <button type="submit" className="btn btn-danger mt-3">
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
    )
  );
}

export default Product_Edition;
