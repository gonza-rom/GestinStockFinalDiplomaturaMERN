import React from 'react';
import { Routes, Route , Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import ProductListPage from '../pages/ProductListPage';
import AddProductPage from '../pages/AddProductPage';

const AppRoutes = () => {
  return (
    <Routes>
       {/* Redirecciona "/" a "/login" */}
      <Route path="/" element={<Navigate to="/login" />} /> 
      <Route path="/login" element={<LoginPage />} />
      <Route path="/productos" element={<ProductListPage />} />
      <Route path="/productos/nuevo" element={<AddProductPage />} />
    </Routes>
  );
};

export default AppRoutes;
