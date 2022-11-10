import React, { useState } from "react";
import { styles } from "./ItemCount.style";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const subtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };


  return (
    <div style={styles.divCount}>
      <button onClick={subtract} style={styles.botones}>-</button>
      <h2>{count}</h2>
      <button onClick={add} style={styles.botones}>+</button>
      <button disabled={stock === 0} onClick={()=>onAdd(count)} style={styles.botonAdd}>
        <span>{stock === 0 ? 'Stock no disponible' : 'Agregar al carrito'}</span>
      </button>
    </div>
  );
};

export default ItemCount;