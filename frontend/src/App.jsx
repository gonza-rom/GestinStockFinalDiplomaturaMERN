import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Gestión de Stock</h1>
        <ProductList />
        <AddProductForm />
    </div>
    </>
  )
}

export default App
