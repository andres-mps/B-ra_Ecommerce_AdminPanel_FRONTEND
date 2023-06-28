import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Product_tr from "../components/Product_tr";
import "./Products.css";
import Sidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";
import { Skeleton } from "antd";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getProductInfo() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_BACK}/products/admin`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setProducts(response.data);
      // console.log(response.data);

      const categories = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_BACK}/categories`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setCategories(categories.data);
      // console.log(categories.data);
    }
    getProductInfo();
  }, []);

  return (
    <div className="m-0 page-wrap">
      <div className="row">
        <div className="col-2 ">
          <Sidebar />
        </div>
        <div className="col-10">
          <div className="table-wrap">
            <div className=" page-title-container d-flex justify-content-between">
              <h2 className="title">Products</h2>
              <NavLink to="/products/add" className="btn create_btn ">
                Add Product
              </NavLink>
            </div>

            <table className="table table-hover">
              <thead>
                <tr className="headers sticky-top">
                  <th scope="col">Id</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Size</th>
                  <th scope="col">Abv</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Category</th>
                  <th scope="col">Featured</th>
                  {/* <th scope="col">Description</th> */}
                  <th scope="col">Active</th>
                  <th scope="col">UpdatedAt</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product) => {
                    return <Product_tr key={product.id} product={product} />;
                  })}
              </tbody>
            </table>
            {products.length === 0 && <Skeleton active className="mt-3" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
