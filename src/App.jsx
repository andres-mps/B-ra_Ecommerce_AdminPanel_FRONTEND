import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Products from "./pages/Products";
import Product_Edition from "./pages/Product_Edition";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        {/* <Route path="/orders" element={<Orders />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/product-edition" element={<Product_Edition />} />
        <Route path="/products/edit/:product" element={<Product_Edition />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
