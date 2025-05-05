const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  categoria: {
    type: String,
    required: true,
    trim: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  imagen: {
    type: String,
    required: false, // Si quieres permitir que algunos productos no tengan imagen
  },
//   creadoPor: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Relacionado con el modelo de Usuario (por ejemplo, quien lo crea)
//     required: true,
//   },
}, { timestamps: true }); // Para tener createdAt y updatedAt

const Product = mongoose.model('Product', productSchema);

module.exports = Product;