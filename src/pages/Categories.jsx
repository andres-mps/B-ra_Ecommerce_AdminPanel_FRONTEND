import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Categories.css";
import Category_tr from "../components/Category_tr";
import Sidebar from "../components/Sidebar";
import { Skeleton } from "antd";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategoryInfo() {
      const categories = await axios({
        method: "GET",
        url: `http://localhost:3000/categories/admin/`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setCategories(categories.data);
      console.log(categories.data);
    }
    getCategoryInfo();
  }, []);

  return (
    <div className="container-fluid m-0 page-wrap">
      <div className="row g-0">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <div className="table-wrap">
            <div className=" page-title-container d-flex justify-content-between">
              <h2 className="title">Categories</h2>
            </div>
            <table className="table table-hover caption-top">
              <thead>
                <tr className="headers  sticky-top">
                  <th scope="col">Id</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Active</th>
                  <th scope="col">CreatedAt</th>
                  <th scope="col">UpdatedAt</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {categories &&
                  categories.map((category) => {
                    return <Category_tr key={category.id} category={category} />;
                  })}
              </tbody>
            </table>
            {categories.length === 0 && <Skeleton active />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
