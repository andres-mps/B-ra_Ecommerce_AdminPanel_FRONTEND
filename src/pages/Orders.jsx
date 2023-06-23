import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";
import Sidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";
import Order_tr from "../components/Order_tr";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrdersInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/orders`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setOrders(response.data);
      console.log(response.data);
    }
    getOrdersInfo();
  }, []);

  return (
    orders && (
      <div className="container-fluid  m-0 page-wrap">
        <div className="row">
          <div className="col-1 col-md-3 col-xl-2  bg-dark">
            <Sidebar />
          </div>
          <div className="col-11  col-md-9 col-xl-10 ps-5 ">
            <div className="table-wrap">
              <table className="table table-hover caption-top">
                <caption className="title">Orders</caption>
                <thead>
                  <tr className="headers">
                    <th scope="col">User </th>
                    {/* <th scope="col">Address</th> */}
                    <th scope="col">Status</th>
                    {/* <th scope="col">SubtotalAmount</th> */}
                    {/* <th scope="col">Taxes</th> */}
                    <th scope="col">TotalAmount</th>
                    <th scope="col">UserId</th>
                    {/* <th scope="col">Products</th> */}
                    <th scope="col">CreatedAt</th>
                    <th scope="col">UpdatedAt</th>
                  </tr>
                </thead>
                <tbody>
                  {orders &&
                    orders.map((order) => {
                      return <Order_tr key={order.id} order={order} />;
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Orders;
