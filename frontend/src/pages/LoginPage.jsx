import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input type="email" className="w-full border border-gray-300 p-2 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Contraseña</label>
          <input type="password" className="w-full border border-gray-300 p-2 rounded" />
        </div>
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">Ingresar</button>
      </form>
    </div>
  );
};

export default LoginPage;