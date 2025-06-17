// src/App.jsx
import React from 'react';
import './App.css';
import NombreApellido from './components/NombreApellido';
import DatosPersonales from './components/DatosPersonales';
import Estudios from './components/Estudios';
import CursosRealizados from './components/CursosRealizados';
import HabilidadesBlandas from './components/HabilidadesBlandas';
import HabilidadesTecnicas from './components/HabilidadesTecnicas';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="app">
      <NombreApellido />
      <DatosPersonales />
      <Estudios />
      <CursosRealizados />
      <HabilidadesBlandas />
      <HabilidadesTecnicas />
      <Contacto />
    </div>
  );
}

export default App;