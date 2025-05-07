import React from 'react';
import ProductList from '../components/ProductList';

const ProductListPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Listado de Productos</h1>
      <ProductList />
    </div>
  );
};

export default ProductListPage;
