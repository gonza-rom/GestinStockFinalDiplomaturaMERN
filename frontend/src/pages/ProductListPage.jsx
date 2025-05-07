// src/pages/ProductListPage.jsx
import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import EditProductForm from '../components/EditProductForm';

const ProductListPage = () => {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  return (
    <div>
      {editingProduct ? (
        <EditProductForm product={editingProduct} onCancel={handleCancelEdit} />
      ) : (
        <ProductList onEdit={handleEdit} />
      )}
    </div>
  );
};

export default ProductListPage;