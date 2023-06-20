import React from "react";
import "./Category_Edition.css";
import { Switch } from "antd";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

function Category_Edition() {
  const [category, setCategory] = useState([]);
  const params = useParams();
  console.log(params.category);

  useEffect(() => {
    async function getCategoryInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/categories/${params.category}`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setCategory(response.data);
      console.log(response.data);
    }
    getCategoryInfo();
  }, []);

  return (
    category && (
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
              placeholder={category.id}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Name
            </label>
            <input
              type="email"
              className="form-control"
              value={category.name}
              id="inputEmail4"
            />
          </div>

          <div className="col-md-4">
            <label for="formFileMultiple" className="form-label">
              Upload product images:
            </label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
          </div>

          <div className="col-md-3  d-flex flex-row">
            <div className="product-img-container">
              <img className="product-img" src={category.image} alt="" />
            </div>
            <div className="product-img-container">
              <img
                className="product-img"
                src="/public/Beach-Side.webp"
                alt=""
              />
            </div>
          </div>

          <div className="col-md-1 d-flex justify-content-between flex-column align-items-center ">
            <label htmlFor="id" className="form-label mt-3">
              Featured
            </label>
            <Switch
              size="small"
              defaultChecked={category.featured}
              onChange={onChange}
            />
          </div>
          <div className="col-md-1 d-flex justify-content-between flex-column align-items-center">
            <label htmlFor="id" className="form-label mt-3">
              Active
            </label>
            <Switch
              size="small"
              defaultChecked={category.active}
              onChange={onChange}
            />
          </div>

          <div className="d-flex flex-row justify-content-between">
            <div>
              <button type="submit" className="btn btn-danger mt-3">
                Delete
              </button>
            </div>

            <div>
              <NavLink
                to="/products"
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
      </div>
    )
  );
}

export default Category_Edition;
