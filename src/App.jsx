import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Product_Edition from "./pages/Product_Edition";
import Product_Add from "./pages/Product_Add";
import Orders from "./pages/Orders";
import Order_Edit from "./pages/Order_Edit";
import Categories from "./pages/Categories";
import Category_Edition from "./pages/Category_Edition";
import Category_Add from "./pages/Category_Add";
import Admins from "./pages/Admins";
import Admin_Edition from "./pages/Admin_Edition";
import Admin_Add from "./pages/Admin_Add";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<Product_Add />} />
        <Route path="/categories/add" element={<Category_Add />} />
        <Route path="/products/edit/:product" element={<Product_Edition />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category-edition" element={<Category_Edition />} />
        <Route
          path="/categories/edit/:category"
          element={<Category_Edition />}
        />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/edit/:orderId" element={<Order_Edit />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/admins/add" element={<Admin_Add />} />
        <Route path="/admins/edit/:id" element={<Admin_Edition />} />
      </Routes>
    </>
  );
}

export default App;
