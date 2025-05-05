const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

app.use(cors());

require('dotenv').config();
require('./config/db'); // conexión a Mongo

app.use(express.json());
app.use('/api/productos', productRoutes);

module.exports = app;