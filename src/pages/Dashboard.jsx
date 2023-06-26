import React from "react";
import Sidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Dashboard.css";
import Order_tr from "../components/Order_tr";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "antd";

function Dashboard() {
  const notify = () =>
    toast.warn("Sorry, this feature is still under development", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

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
      response.data.length = 10;
      setOrders(response.data);
      console.log(response.data);
    }
    getOrdersInfo();
  }, []);

  return (
    <div className="m-0 page-wrap">
      <div className="row ">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10 ps-5">
          <div className="cards-container">
            <h2 className="title mt-5 fs-4">Dashboard</h2>
            <h3 className="fs-6 my-3">Last 30 days</h3>
            <div className="row ">
              <div className="col-12 col-lg-4">
                <div className="card mt-2 border-0 p-0 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex flex-row nowrap pb-4">
                      <i className="bi bi-bag-check bg-primary opacity-75 fs-3 me-3 mb-2 text-white px-2 py-1 rounded"></i>
                      <div>
                        <div>
                          <p className="card-title d-inline fs-6 nowrap">
                            Monthly sales <small className="opacity-50 fs-7">(USD)</small>
                          </p>
                        </div>
                        <p className="card-text fs-5 fw-semibold  d-inline">153.603</p>{" "}
                        <span>
                          <i className="bi bi-arrow-up text-success fw-normal">21%</i>
                        </span>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <NavLink onClick={notify} className="text-decoration-none">
                        View all
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12  col-lg-4">
                <div className="card mt-2 border-0 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex flex-row nowrap pb-4">
                      <i className="bi bi-bag-check bg-primary opacity-75 fs-3 me-3 mb-2 text-white px-2 py-1 rounded"></i>
                      <div>
                        <div>
                          <p className="card-title d-inline fs-6 nowrap">
                            Number of orders <small className="opacity-50 fs-6">(QTY)</small>
                          </p>
                        </div>
                        <p className="card-text fs-5 fw-semibold  d-inline">98.332</p>{" "}
                        <span>
                          <i className="bi bi-arrow-up text-success fw-normal">15%</i>
                        </span>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <NavLink onClick={notify} className="text-decoration-none">
                        View all
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card mt-2 border-0 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex flex-row nowrap pb-4">
                      <i className="bi bi-bag-check bg-primary opacity-75 fs-3 me-3 mb-2 text-white px-2 py-1 rounded"></i>
                      <div>
                        <div>
                          <p className="card-title d-inline fs-6 nowrap">
                            Convertion rate <small className="opacity-50 fs-6">(%)</small>
                          </p>
                        </div>
                        <p className="card-text fs-5 fw-semibold  d-inline">1.3%</p>{" "}
                        <span>
                          <i className="bi bi-arrow-up text-success fw-normal">0.1 p.p.</i>
                        </span>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <NavLink onClick={notify} className="text-decoration-none">
                        View all
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="table-wrap">
            <div className=" page-title-container d-flex justify-content-between">
              <h2 className="title">Last 10 orders</h2>
              <NavLink to="/orders" className="btn create_btn ">
                View all
              </NavLink>
            </div>
            <table className="table table-hover">
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
            {orders.length === 0 && <Skeleton active className="mt-3" />}
          </div>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
}

export default Dashboard;
