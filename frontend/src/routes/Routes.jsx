import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import ProductListPage from '../pages/ProductListPage';
import AddProductPage from '../pages/AddProductPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/productos" element={<ProductListPage />} />
      <Route path="/productos/nuevo" element={<AddProductPage />} />
    </Routes>
  );
};

export default AppRoutes;
