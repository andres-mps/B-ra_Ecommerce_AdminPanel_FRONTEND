import React from "react";
import "./Admin_tr.css";
import { enUS } from "date-fns/locale";
import { format } from "date-fns";

import { NavLink } from "react-router-dom";

function Admin_tr({ admin }) {
  return (
    <tr className="table-row">
      <td> {admin.id}</td>

      <td className="text-start">{admin.firstname}</td>
      <td className="text-start">{admin.lastname}</td>
      <td> {format(new Date(admin.createdAt), "dd MMM yy", { locale: enUS })}</td>
      <td> {format(new Date(admin.updatedAt), "dd MMM yy", { locale: enUS })}</td>
      <td>
        <NavLink to={`/admins/edit/${admin.id}`}>
          <i className="bi bi-pencil-fill text-primary pencil"></i>
        </NavLink>
      </td>
    </tr>
  );
}

export default Admin_tr;
