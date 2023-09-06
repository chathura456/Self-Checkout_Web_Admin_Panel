import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import AddProduct from './pages/AddProduct/AddProduct';
import Customers from './pages/Customers/Customers';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Order from './pages/Orders/Order';
import Product from './pages/Products/Product';

function App() {
  return (
<>
     <Router>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/addproduct" element={<AddProduct/>} />
        <Route path="/customer" element={<Customers/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/order" element={<Order/>} />
      </Routes>
     </Router>
     </>
  );
}

export default App
