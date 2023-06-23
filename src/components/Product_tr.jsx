import React from "react";
import "./Product_tr.css";
import { enUS } from "date-fns/locale";
import { format } from "date-fns";
import { NavLink } from "react-router-dom";

function Product_tr({ product }) {
  function stockIcons() {
    if (product.stock === 0) {
      return <i class="bi bi-exclamation-triangle-fill text-danger"></i>;
    }
  }

  return (
    <tr className="table-row">
      <td> {product.id}</td>

      <td className="thumbnail-container">
        <img className="thumbnail-img" src={`http://localhost:3000/img/${product.image}`} alt="" />
      </td>
      <td className="text-start">{product.name}</td>
      <td>{product.price}</td>
      <td>{product.size}</td>
      <td>{product.abv}</td>
      <td>
        {stockIcons()}
        {"  "}
        {product.stock}
      </td>
      <td>{product.category.name}</td>
      <td>{product.categoryId}</td>
      <td>{product.featured ? <i class="bi bi-star-fill text-warning "></i> : "-"}</td>
      {/* <td className="collapsible-cell text-start">
        <span className="collapsible-content">{product.description}</span>
      </td> */}
      <td>{product.active ? "True" : "False"} </td>
      <td> {format(new Date(product.createdAt), "dd MMM yy", { locale: enUS })}</td>
      <td> {format(new Date(product.updatedAt), "dd MMM yy", { locale: enUS })}</td>
      <td>
        <NavLink to={`/products/edit/${product.slug}`}>
          <i className="bi bi-pencil-fill text-primary pencil me-2"></i>
        </NavLink>
      </td>
    </tr>
  );
}

export default Product_tr;
