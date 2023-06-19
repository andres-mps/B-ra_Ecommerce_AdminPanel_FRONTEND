import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Product_tr from "../components/Product_tr";
import "./Products.css";
import Sidebar from "../components/Sidebar";
import Test from "../components/Test";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getProductInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/products`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setProducts(response.data);
      console.log(response.data);

      const categories = await axios({
        method: "GET",
        url: `http://localhost:3000/categories`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setCategories(categories.data);
      console.log(categories.data);
    }
    getProductInfo();
  }, []);

  return (
    <div className="container-fluid  m-0 table-container">
      <div className="row">
        <div className="col-1 col-md-3 col-xl-2  bg-dark">
          <Sidebar />
        </div>
        <div className="col-11  col-md-9 col-xl-10">
          <table className="table">
            <thead>
              <tr className="headers">
                <th scope="col">Id</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Size</th>
                <th scope="col">Abv</th>
                <th scope="col">Stock</th>
                <th scope="col">Category</th>
                <th scope="col">CategoryId</th>
                <th scope="col">Featured</th>
                <th scope="col">Description</th>
                <th scope="col">Active</th>
                <th scope="col">CreatedAt</th>
                <th scope="col">UpdatedAt</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product) => {
                  return <Product_tr key={product.id} product={product} />;
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
