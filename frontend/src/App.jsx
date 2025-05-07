import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import Navbar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
