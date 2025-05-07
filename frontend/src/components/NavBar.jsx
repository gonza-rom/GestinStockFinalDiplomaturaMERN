import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-lg font-bold">Gestión de Stock</h1>
      <div className="space-x-4">
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/productos" className="hover:underline">Productos</Link>
        <Link to="/productos/nuevo" className="hover:underline">Agregar Producto</Link>
      </div>
    </nav>
  );
};

export default Navbar;
