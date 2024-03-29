import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Admin_tr from "../components/Admin_tr";
import Sidebar from "../components/Sidebar";
import { Skeleton } from "antd";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Admins() {
  const [admins, setAdmins] = useState([]);
  const token = useSelector((state) => state.admin.token);

  useEffect(() => {
    async function getAdminInfo() {
      const admins = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_BACK}/admins`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAdmins(admins.data);
      console.log(admins.data);
    }
    getAdminInfo();
  }, []);

  return (
    <div className="page-wrap">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <div className="table-wrap">
            <div className=" page-title-container d-flex justify-content-between">
              <h2 className="title">Admins</h2>
              <NavLink to="/admins/add" className="btn create_btn ">
                Add Admin
              </NavLink>
            </div>
            <table className="table table-hover caption-top">
              <thead>
                <tr className="headers  sticky-top">
                  <th scope="col">Id</th>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">CreatedAt</th>
                  <th scope="col">UpdatedAt</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {admins &&
                  admins.map((admin) => {
                    return <Admin_tr key={admin.id} admin={admin} />;
                  })}
              </tbody>
            </table>
            {admins.length === 0 && <Skeleton active />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admins;
