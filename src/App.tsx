import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/Products';
import AdminOrders from './pages/admin/Orders';
import AdminCustomers from './pages/admin/Customers';
import AdminSettings from './pages/admin/Settings';
import Shop from './pages/user/Shop';
import Cart from './pages/user/Cart';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Admin Routes */}
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/products" element={<AdminProducts />} />
          <Route path="admin/orders" element={<AdminOrders />} />
          <Route path="admin/customers" element={<AdminCustomers />} />
          <Route path="admin/settings" element={<AdminSettings />} />

          {/* User Routes */}
          <Route index element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;