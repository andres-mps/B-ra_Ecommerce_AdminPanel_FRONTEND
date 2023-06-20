import React from "react";
import "./Order_tr.css";
import { enUS } from "date-fns/locale";
import { format } from "date-fns";
import { NavLink } from "react-router-dom";

function Order_tr({ order }) {
  return (
    <tr className="table-row">
      <td>
        {order.user.firstname} {order.user.lastname} (<small>{order.user.email}</small>)
      </td>
      {/* <td>{order.address}</td> */}
      <td>{order.status}</td>
      {/* <td>{order.subTotalPrice}</td> */}
      {/* <td>{order.taxes}</td> */}
      <td>{order.totalAmount}</td>
      <td>{order.userId}</td>
      <td className="collapsible-cell text-start">
        {/* <span className="collapsible-content">{order.products}</span> */}
      </td>
      <td> {format(new Date(order.createdAt), "dd MMM yy", { locale: enUS })}</td>
      <td> {format(new Date(order.updatedAt), "dd MMM yy", { locale: enUS })}</td>
      <td>
        <NavLink to={`/orders/edit/${order.id}`}>
          <i class="bi bi-pencil-fill text-success pencil"></i>
        </NavLink>
      </td>
    </tr>
  );
}

export default Order_tr;
