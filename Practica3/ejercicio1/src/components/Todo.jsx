import React from 'react'
import styles from "../app/page.module.css"

const Todo = ({ producto, index, deleteProducto }) => {
  const { nombre, marca, cantidad, precio } = producto;
  return (
    <div className={styles.list}>
      <h3>
        {nombre} - {marca} | Cantidad: {cantidad} | Precio: ${precio} | Subtotal: ${cantidad * precio}
        <button className={styles.btn_delete} onClick={() => deleteProducto(index)}>X</button>
      </h3>
    </div>
  );
};

export default Todo;
