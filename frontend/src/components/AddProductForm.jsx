// AddProductForm.jsx

import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/productos', data);
      alert('Producto creado exitosamente');
      reset(); // Limpia el formulario
    } catch (error) {
      console.error('Error al crear el producto:', error);
      alert('Hubo un error al crear el producto');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Agregar Producto</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            {...register("nombre", { required: "El nombre es obligatorio" })}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
        </div>

        {/* Categoría */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Categoría</label>
          <input
            type="text"
            {...register("categoria", { required: "La categoría es obligatoria" })}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.categoria && <p className="text-red-500 text-sm">{errors.categoria.message}</p>}
        </div>

        {/* Precio */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Precio</label>
          <input
            type="number"
            step="0.01"
            {...register("precio", {
              required: "El precio es obligatorio",
              min: { value: 0.01, message: "Debe ser mayor a 0" }
            })}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.precio && <p className="text-red-500 text-sm">{errors.precio.message}</p>}
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Stock</label>
          <input
            type="number"
            {...register("stock", {
              required: "El stock es obligatorio",
              min: { value: 0, message: "Debe ser 0 o mayor" }
            })}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.stock && <p className="text-red-500 text-sm">{errors.stock.message}</p>}
        </div>

        {/* Imagen */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Imagen (URL)</label>
          <input
            type="text"
            {...register("imagen", {
              pattern: {
                value: /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp|svg)$/i,
                message: "Debe ser una URL de imagen válida"
              }
            })}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.imagen && <p className="text-red-500 text-sm">{errors.imagen.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
        >
          Agregar Producto
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
