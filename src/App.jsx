import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Products from "./pages/Products";
import Product_Edition from "./pages/Product_Edition";
import Product_Add from "./pages/Product_Add";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Categories from "./pages/Categories";
import Category_Edition from "./pages/Category_Edition";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} />}
        {/* <Route path="/orders" element={<Orders />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<Product_Add />} />
        <Route path="/products/edit/:product" element={<Product_Edition />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category-edition" element={<Category_Edition />} />
        <Route path="/categories/edit/:category" element={<Category_Edition />} />
        <Route path="/users" element={<Users />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  );
}

export default App;
