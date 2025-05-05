const Product = require('../models/product');

// Crear producto
const createProduct = async (req, res) => {
    try {
      const newProduct = new Product({ ...req.body });
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error); // Aquí se imprimirá el error completo
      res.status(500).json({ message: 'Error al crear el producto', error });
    }
  };
  
  // Obtener productos (con filtros y paginado)
  const getProducts = async (req, res) => {
    try {
      const { categoria, nombre, stockBajo, page = 1, limit = 10 } = req.query;
  
      let filtro = {};
  
      if (categoria) filtro.categoria = categoria;
      if (nombre) filtro.nombre = new RegExp(nombre, 'i'); // Búsqueda parcial
      if (stockBajo === 'true') filtro.stock = { $lt: 5 };
  
      const total = await Product.countDocuments(filtro);
      const productos = await Product.find(filtro)
        .skip((page - 1) * limit)
        .limit(Number(limit));
  
      res.json({ total, page: Number(page), productos });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener productos', error });
    }
  };
  
  // Obtener uno
  const getProductById = async (req, res) => {
    try {
      const producto = await Product.findById(req.params.id);
      if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
      res.json(producto);
    } catch (error) {
      res.status(500).json({ message: 'Error al buscar el producto', error });
    }
  };
  
  // Editar
  const updateProduct = async (req, res) => {
    try {
      const producto = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
      res.json(producto);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar producto', error });
    }
  };
  
  // Eliminar
  const deleteProduct = async (req, res) => {
    try {
      const producto = await Product.findByIdAndDelete(req.params.id);
      if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
      res.json({ message: 'Producto eliminado' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar producto', error });
    }
  };
  
  module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
  };