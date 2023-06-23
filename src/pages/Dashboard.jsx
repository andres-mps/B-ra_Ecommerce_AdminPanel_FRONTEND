import React from "react";
import Sidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Order_tr from "../components/Order_tr";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const notify = () =>
    toast.warn("Sorry, this feature is still under develpment", {
      position: "top-right",
      autoClose: 5000,
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
    <div className="container-fluid m-0 page-wrap">
      <div className="row ">
        <div className="col-1 col-md-3 col-xl-2  bg-dark">
          <Sidebar />
        </div>

        <div className="col-11 col-md-9 col-xl-10 ps-5">
          <h1 className="mt-5 fs-4">Dashboard</h1>
          <h3 className="fs-6 my-3">Last 30 days</h3>
          <div className="card-container me-5">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div class="card mt-2 border-0 shadow-sm">
                  <div class="card-body">
                    <div className="d-flex flex-row nowrap pb-4">
                      <i class="bi bi-bag-check bg-primary opacity-75 fs-3 me-3 mb-2 text-white px-2 py-1 rounded"></i>
                      <div>
                        <div>
                          <p class="card-title d-inline fs-5 nowrap">
                            Monthly sales <small className="opacity-50 fs-6">(USD)</small>
                          </p>
                        </div>
                        <p class="card-text fs-4 fw-semibold  d-inline">153.603</p>{" "}
                        <span>
                          <i class="bi bi-arrow-up text-success fw-normal">21%</i>
                        </span>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <NavLink onClick={notify} class="text-decoration-none">
                        View all
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12  col-lg-4">
                <div class="card mt-2 border-0 shadow-sm">
                  <div class="card-body">
                    <div className="d-flex flex-row nowrap pb-4">
                      <i class="bi bi-bag-check bg-primary opacity-75 fs-3 me-3 mb-2 text-white px-2 py-1 rounded"></i>
                      <div>
                        <div>
                          <p class="card-title d-inline fs-5 nowrap">
                            Number of orders <small className="opacity-50 fs-6">(QTY)</small>
                          </p>
                        </div>
                        <p class="card-text fs-4 fw-semibold  d-inline">98.332</p>{" "}
                        <span>
                          <i class="bi bi-arrow-up text-success fw-normal">15%</i>
                        </span>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <NavLink onClick={notify} class="text-decoration-none">
                        View all
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div class="card mt-2 border-0 shadow-sm">
                  <div class="card-body">
                    <div className="d-flex flex-row nowrap pb-4">
                      <i class="bi bi-bag-check bg-primary opacity-75 fs-3 me-3 mb-2 text-white px-2 py-1 rounded"></i>
                      <div>
                        <div>
                          <p class="card-title d-inline fs-5 nowrap">
                            Convertion rate <small className="opacity-50 fs-6">(%)</small>
                          </p>
                        </div>
                        <p class="card-text fs-4 fw-semibold  d-inline">1.3%</p>{" "}
                        <span>
                          <i class="bi bi-arrow-up text-success fw-normal">0.1 p.p.</i>
                        </span>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <NavLink onClick={notify} class="text-decoration-none">
                        View all
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="table-wrap">
            <table className="table table-hover caption-top">
              <caption className="title">Last 10 Orders</caption>
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
