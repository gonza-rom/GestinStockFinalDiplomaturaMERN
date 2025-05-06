import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import EditProductForm from './components/EditProductForm';
import './index.css'

function App() {
  const [editingProduct, setEditingProduct] = useState(null); // ⬅️ estado para producto a editar

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center my-6">Gestión de Stock</h1>

        {editingProduct ? (
          <EditProductForm product={editingProduct} onCancel={handleCancelEdit} />
        ) : (
          <>
            <ProductList onEdit={handleEdit} />
            <AddProductForm />
          </>
        )}
      </div>
    </>
  );
}

export default App;