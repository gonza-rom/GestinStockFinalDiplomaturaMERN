import { useState } from 'react';

function EditProductForm({ product, onCancel }) {
  const [nombre, setNombre] = useState(product.nombre);
  const [precio, setPrecio] = useState(product.precio);
  const [stock, setStock] = useState(product.stock);
  const [categoria, setCategoria] = useState(product.categoria);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !precio || !stock || !categoria) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    // Asegúrate de que el ID no sea undefined
    if (!product._id) {
        setError('ID del producto no válido.');
        return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/productos/${product._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, precio, stock, categoria }),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el producto');
      }

      // Podés emitir un evento o recargar los datos acá si es necesario
      onCancel(); // Cierra el formulario de edición
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Editar Producto</h2>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <label className="block text-gray-700 text-sm font-bold mb-2">
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 mt-1"
        />
      </label>

      <label className="block text-gray-700 text-sm font-bold mb-2">
        Precio:
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 mt-1"
        />
      </label>

      <label className="block text-gray-700 text-sm font-bold mb-2">
        Stock:
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 mt-1"
        />
      </label>

      <label className="block text-gray-700 text-sm font-bold mb-4">
        Categoría:
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 mt-1"
        />
      </label>

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Guardar cambios
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default EditProductForm;