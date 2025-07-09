"use client"
import React, { useState } from 'react'
import Todo from './Todo'
import styles from "../app/page.module.css"

const Form = () => {
  const [producto, setProducto] = useState({
    nombre: '',
    marca: '',
    cantidad: 1,
    precio: 0
  });

  const [productos, setProductos] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleClick = () => {
    const { nombre, marca, cantidad, precio } = producto;
    if (!nombre.trim() || !marca.trim() || cantidad <= 0 || precio <= 0) {
      alert('Por favor completa todos los campos con valores válidos.');
      return;
    }

    setProductos([...productos, producto]);
    setProducto({ nombre: '', marca: '', cantidad: 1, precio: 0 });
  };

  const deleteProducto = (index) => {
    const nuevosProductos = [...productos];
    nuevosProductos.splice(index, 1);
    setProductos(nuevosProductos);
  };

  const calcularTotal = () => {
    return productos.reduce((total, prod) => total + (prod.cantidad * prod.precio), 0).toFixed(2);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Agregar Producto</label>
        <input className={styles.form_input} type='text' name='nombre' placeholder='Nombre' value={producto.nombre} onChange={handleChange} />
        <input className={styles.form_input} type='text' name='marca' placeholder='Marca' value={producto.marca} onChange={handleChange} />
        <input className={styles.form_input} type='number' name='cantidad' placeholder='Cantidad' value={producto.cantidad} onChange={handleChange} />
        <input className={styles.form_input} type='number' step="0.01" name='precio' placeholder='Precio' value={producto.precio} onChange={handleChange} />
        <button className={styles.form_button} onClick={handleClick}>Agregar</button>
      </form>

      {productos.map((prod, index) => (
        <Todo key={index} index={index} producto={prod} deleteProducto={deleteProducto} />
      ))}

      <h3>Total: ${calcularTotal()}</h3>
    </>
  );
};

export default Form;
