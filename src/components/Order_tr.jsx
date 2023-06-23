import React from "react";
import "./Order_tr.css";
import { enUS } from "date-fns/locale";
import { format } from "date-fns";
import { NavLink } from "react-router-dom";

function Order_tr({ order }) {
  function statusIcons() {
    if (order.status === "Pending") {
      return <i className="bi bi-arrow-clockwise "></i>;
    } else if (order.status === "In progress") {
      return <i class="bi bi-box-arrow-right text-warning"></i>;
    } else {
      return <i class="bi bi-check-circle-fill text-success"></i>;
    }
  }
  return (
    <tr className="table-row">
      <td className="opacity-100 ms-3">
        {order.user.firstname} {order.user.lastname} (
        <small className="opacity-75">{order.user.email}</small>)
      </td>
      {/* <td>{order.address}</td> */}
      <td className="fs-7">
        {statusIcons()} {order.status}
      </td>
      {/* <td>{order.subTotalPrice}</td> */}
      {/* <td>{order.taxes}</td> */}
      <td>{order.totalAmount}</td>
      <td>{order.userId}</td>
      {/* <td className="collapsible-cell text-start"> */}
      {/* <span className="collapsible-content">{order.products}</span> */}
      {/* </td> */}
      <td> {format(new Date(order.createdAt), "dd MMM yy", { locale: enUS })}</td>
      <td> {format(new Date(order.updatedAt), "dd MMM yy", { locale: enUS })}</td>
      <td>
        <NavLink to={`/orders/edit/${order.id}`}>
          <i class="bi bi-pencil-fill text-primary pencil me-2"></i>
        </NavLink>
      </td>
    </tr>
  );
}

export default Order_tr;
