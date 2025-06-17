// src/components/NombreApellido.jsx
import React from 'react';
import './NombreApellido.css'; // Opcional si usas CSS por componente

function NombreApellido() {
  return (
    <section className="nombre-apellido">
      <h1>Juan Pérez</h1>
      <img src="/tu_foto.jpg" alt="Mi Foto" className="foto-personal" />
    </section>
  );
}

export default NombreApellido;