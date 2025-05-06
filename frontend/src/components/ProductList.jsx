// src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';

const ProductList = ({ onEdit }) => {
  const API = import.meta.env.VITE_API_URL;
  const [productos, setProductos] = useState([]);
  const [categoria, setCategoria] = useState('');
  const [nombre, setNombre] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 5;

  const fetchProductos = async () => {
    try {
      const params = new URLSearchParams({
        page,
        limit,
        categoria,
        nombre,
      });

      const res = await fetch(`${API}?${params.toString()}`);
      const data = await res.json();
      setProductos(data.productos);
      setTotal(data.total);
    } catch (error) {
      console.error('Error al obtener productos', error);
    }
  };

  const handleDelete = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de que querés eliminar este producto?");
    if (!confirmar) return;
  
    try {
      const response = await fetch(`http://localhost:5000/api/productos/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        // Si usás estado local para los productos:
        setProductos((prev) => prev.filter((producto) => producto._id !== id));
        alert("Producto eliminado exitosamente.");
      } else {
        console.error("Error al eliminar el producto");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };
  

  useEffect(() => {
    fetchProductos();
  }, [page, categoria, nombre]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Productos</h2>

      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={nombre}
          onChange={(e) => {
            setPage(1);
            setNombre(e.target.value);
          }}
          className="border p-2 rounded"
        />

        <select
          value={categoria}
          onChange={(e) => {
            setPage(1);
            setCategoria(e.target.value);
          }}
          className="border p-2 rounded"
        >
          <option value="">Todas las categorías</option>
          <option value="mochilas">Mochilas</option>
          <option value="Bolso">Bolso</option>
          <option value="rinonera">Riñonera</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {productos.map((p) => (
    <div key={p._id} className="border p-4 rounded shadow max-w-sm mx-auto">
      <img
        src={p.imagen}
        alt={p.nombre}
        className="w-full h-40 object-cover mb-2"
      />
      <h3 className="text-lg font-semibold">{p.nombre}</h3>
      <p className="text-sm text-gray-600">{p.categoria}</p>
      <p className="text-green-600 font-bold">${p.precio}</p>
      <p className="text-sm">Stock: {p.stock}</p>
      <button
        onClick={() => {
          console.log(p); // Verifica que el producto tenga un id válido
          onEdit(p); // Pasar el producto a editar
        }}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Editar
      </button>
      <button
        onClick={() => handleDelete(p._id)}
        className="mt-2 ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Eliminar
      </button>
    </div>
  ))}
      </div>

      {/* Paginación */}
      <div className="mt-6 flex justify-center items-center gap-2">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Anterior
        </button>

        <span>Página {page} de {totalPages}</span>

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ProductList;
