import React from "react";
import "./Product_tr.css";
import { enUS } from "date-fns/locale";
import { format } from "date-fns";

import { NavLink } from "react-router-dom";

function Category_tr({ category }) {
  return (
    <tr className="table-row">
      <td> {category.id}</td>

      <td className="thumbnail-container">
        <img
          className="thumbnail-img"
          src={`${import.meta.env.VITE_APP_BACK_IMG + category.image}`}
          alt=""
        />
      </td>
      <td className="text-start">{category.name}</td>
      <td>{category.active ? "True" : "False"}</td>
      {/* <td>{category.active ? "True" : "False"} </td> */}
      <td> {format(new Date(category.createdAt), "dd MMM yy", { locale: enUS })}</td>
      <td> {format(new Date(category.updatedAt), "dd MMM yy", { locale: enUS })}</td>
      <td>
        <NavLink to={`/categories/edit/${category.slug}`}>
          <i className="bi bi-pencil-fill text-primary pencil"></i>
        </NavLink>
      </td>
    </tr>
  );
}

export default Category_tr;
