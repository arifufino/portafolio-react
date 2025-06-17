// src/components/DatosPersonales.jsx
import React from 'react';

function DatosPersonales() {
  return (
    <section className="datos-personales">
      <h2>Datos Personales</h2>
      <ul>
        <li><strong>Cédula:</strong> 1234567890</li>
        <li><strong>Edad:</strong> 25 años</li>
        <li><strong>Ciudad:</strong> Bogotá, Colombia</li>
        <li><strong>Nacionalidad:</strong> Colombiana</li>
        <li><strong>Género:</strong> Masculino</li>
      </ul>
    </section>
  );
}

export default DatosPersonales;