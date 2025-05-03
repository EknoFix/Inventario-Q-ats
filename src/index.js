import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

// Selecciona el elemento root de tu aplicación
const container = document.getElementById('root');

// Crea un root
const root = createRoot(container);

// Renderiza la app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);