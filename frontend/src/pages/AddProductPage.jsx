import React from 'react';
import AddProductForm from '../components/AddProductForm';

const AddProductPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Agregar Nuevo Producto</h1>
      <AddProductForm />
    </div>
  );
};

export default AddProductPage;
