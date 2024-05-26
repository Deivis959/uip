import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from './pages/catalogo';
import NoPage from './pages/noPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
  </BrowserRouter>
);