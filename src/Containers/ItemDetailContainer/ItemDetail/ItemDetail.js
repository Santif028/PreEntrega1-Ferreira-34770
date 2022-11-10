import React, { useState, useContext } from "react";
import ItemCount from "../../../Components/ItemCount/ItemCount";
import { styles } from "./ItemDetail.style";
import { Link } from "react-router-dom";
import { Context } from "../../../Context/Context";

const ItemDetail = ({ product }) => {
  const [isPressedButton, setIsPressedButton] = useState(false);
  const { cart, addItem, IsInCart} = useContext(Context);

  let stock = 0;
  if(IsInCart(product.id)){
    const found = cart.find(item => item.id === product.id);
    stock = product.stock - found.cantidad;
  }else{
    stock = product.stock;
  }

  const onAdd = (count) => {
    setIsPressedButton(true);
    addItem(product, count);
  };

  return (
    <div style={styles.divDetail}>
      <img alt={product.title} src={product.image} style={styles.img} />
      <div style={styles.divDetail2}>
        <h1 style={styles.h1}>{product.title}</h1>
        <h2 style={styles.h2}>$ {product.price}</h2>
        {!isPressedButton ? (
          <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        ) : (     
            <Link to="/cart" style={styles.a}>
              <button style={styles.botonFinalizar}>Finalizar Compra</button>
            </Link>
        )}
      </div>
      <div style={styles.divDetail3} >
        <h2>Descripción</h2>
        <span style={styles.span}>{product.description}</span>
      </div>
    </div>
  );
};

export default ItemDetail;