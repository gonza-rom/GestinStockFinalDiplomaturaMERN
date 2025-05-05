const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// Middleware para verificar el token
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Suponiendo que el token se pasa como 'Bearer <token>'
  if (!token) return res.status(403).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Guardamos la info del usuario en req.user
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido', error });
  }
};

// Middleware para verificar si el usuario es admin
const isAdmin = (req, res, next) => {
  if (req.user.rol !== 'admin') {
    return res.status(403).json({ message: 'No tienes permisos para realizar esta acción' });
  }
  next();
};

module.exports = { verifyToken, isAdmin };
