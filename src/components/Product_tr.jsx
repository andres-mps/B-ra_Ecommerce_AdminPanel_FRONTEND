import React from "react";
import "./Product_tr.css";
import { enUS } from "date-fns/locale";
import { format } from "date-fns";
import { NavLink } from "react-router-dom";

function Product_tr({ product }) {
  return (
    <tr className="table-row">
      <td> {product.id}</td>

      <td className="thumbnail-container">
        <img className="thumbnail-img" src={product.image} alt="" />
      </td>
      <td className="text-start">{product.name}</td>
      <td>{product.price}</td>
      <td>{product.size}</td>
      <td>{product.abv}</td>
      <td>{product.stock}</td>
      <td>{product.category.name}</td>
      <td>{product.category.id}</td>
      <td>{product.featured ? "True" : "False"}</td>
      {/* <td className="collapsible-cell text-start">
        <span className="collapsible-content">{product.description}</span>
      </td> */}
      <td>{product.active ? "True" : "False"} </td>
      <td> {format(new Date(product.createdAt), "dd MMM yy", { locale: enUS })}</td>
      <td> {format(new Date(product.updatedAt), "dd MMM yy", { locale: enUS })}</td>
      <td>
        <NavLink to={`/products/edit/${product.slug}`}>
          <i class="bi bi-pencil-fill text-success pencil"></i>
        </NavLink>
      </td>
    </tr>
  );
}

export default Product_tr;
