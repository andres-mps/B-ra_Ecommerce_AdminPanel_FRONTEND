import React from "react";
import "./Product_Edition.css";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function Order_edit() {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  const params = useParams();

  // inputs:
  const [id, setId] = useState(null);
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [subTotalPrice, setSubTotalPrice] = useState(null);
  const [taxes, setTaxes] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    async function getOrderInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/orders/order/${params.orderId}`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setOrder(response.data);
      setId(response.data.id);
      setAddress(response.data.address);
      setStatus(response.data.status);
      setSubTotalPrice(response.data.subTotalPrice);
      setTaxes(response.data.taxes);
      setTotalAmount(response.data.totalAmount);
      setUserId(response.data.userId);

      console.log(response.data);
    }
    getOrderInfo();
  }, []);

  async function handleUpdate(event) {
    event.preventDefault();

    const orderInfo = {
      id,
      address,
      status,
      subTotalPrice,
      taxes,
      totalAmount,
      userId,
    };
    console.log(orderInfo);

    await axios({
      method: "PATCH",
      url: `http://localhost:3000/orders/order/${order.id}`,
      data: orderInfo,
      headers: {
        "Content-Type": "multipart/form-data",
        //   Authorization: `Bearer ${token}`,
      },
    });
    navigate(-1);
  }

  const handleDelete = () => {
    // e.preventDefault();
    async function deleteOrder() {
      await axios({
        method: "DELETE",
        url: `http://localhost:3000/orders/${order.id}`,
        headers: {
          // Authorization: `Bearer ${token}`,
        },
      });
    }
    deleteProduct();
    navigate("/orders");
  };

  return (
    order && (
      <div className="container-fluid page-wrap">
        <div className="row">
          <div className="col-1 col-md-3 col-xl-2  bg-dark">
            <Sidebar />
          </div>
          <div className="col-11 col-md-9 col-xl-10 ">
            <div className="content-container">
              <h1 className="title">Order Id: {order.id} </h1>
              <form
                className="row g-3"
                encType="multipart/form-data"
                method="PATCH"
                onSubmit={handleUpdate}
              >
                <div className="col-md-1">
                  <label htmlFor="userId" className="form-label">
                    User Id
                  </label>
                  <input
                    type="userId"
                    className="form-control"
                    onChange={(event) => setUserId(event.target.value)}
                    value={userId}
                    id="userId"
                  />
                </div>

                <div className="col-4 col-md-2">
                  <label htmlFor="status" className="form-label mt-3">
                    Status
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="status"
                    onChange={(event) => setStatus(event.target.value)}
                    value={status}
                  />
                </div>
                <div className="col-12 col-md-4">
                  <label htmlFor="address" className="form-label  mt-3">
                    Addreess
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    onChange={(event) => setAddreess(event.target.value)}
                    value={address}
                  />
                </div>
                <div className="col-4 col-md-2">
                  <label htmlFor="subTotalPrice" className="form-label  mt-3">
                    SubTotalPrice
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subTotalPrice"
                    onChange={(event) => setSubTotalPrice(event.target.value)}
                    value={subTotalPrice}
                  />
                </div>
                <div className="col-4 col-md-2">
                  <label htmlFor="taxes" className="form-label  mt-3">
                    Taxes
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="taxes"
                    onChange={(event) => setTaxes(event.target.value)}
                    value={taxes}
                  />
                </div>
                <div className="col-4 col-md-2">
                  <label htmlFor="totalAmount" className="form-label  mt-3">
                    Total Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="totalAmount"
                    onChange={(event) => setTotalAmount(event.target.value)}
                    value={totalAmount}
                  />
                </div>

                <div className="d-flex flex-row justify-content-between">
                  <div>
                    <button onClick={handleDelete} className="btn btn-danger mt-3">
                      Delete
                    </button>
                  </div>
                  <div>
                    <NavLink to="/orders" className="btn btn-outline-secondary me-2  mt-3">
                      Cancel
                    </NavLink>
                    <button type="submit" className="btn btn-success mt-3">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Order_edit;
