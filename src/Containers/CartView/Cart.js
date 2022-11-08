import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import "./Cart.css";
import { dataBase } from "../../Firebase/Firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import { useState } from "react";

export const Cart = ({ estilo, color }) => {
  const { cart, total, clear} = useContext(Context);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");

  const nombreOnchangeHandler = (e) => {
    setNombre(e.target.value)
  }
  const apellidoOnchangeHandler = (e) => {
    setApellido(e.target.value)
  }
  const emailOnchangeHandler = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setNombre("")
    setApellido("")
    setNombre("")
  }


  const comprador = {
    nombre: nombre,
    apellido: apellido,
    email: email,
  };

  const finalizarCompra = () => {
    const ventasCollection = collection(dataBase, "ventas");
    addDoc(ventasCollection, {
      comprador,
      items: cart,
      total,
      date: serverTimestamp()
    })
      .then(result => {
        console.log(result.id);
      })
      .catch(e => {
        console.log('error');
        console.log(e);
      });

    cart.forEach((producto,i) => {
      const updateStock = doc(dataBase, "productos", producto.id)
      updateDoc(updateStock, { stock: producto.stock - cart[i].cantidad})
    });

    clear();
  }

  return (
    <>
      {cart.length === 0 ? (
        <>
          <h1>
            Su carrito se encuentra vacío, presione <Link to="/">aqui</Link> para seguir comprando.
          </h1>
        </>
      ) : (
        <>
          {cart.map((producto) => (
            <h1 key={producto.id}>{producto.title}</h1>
          ))}
          <form onSubmit={handleSubmit} name="usuarios" action="submit">
            <label>
              Nombre:
              <input type="text" name="name" value={nombre} onChange={nombreOnchangeHandler} />
            </label>
            <label>
              Apellido:
              <input type="text" name="apellido" value={apellido} onChange={apellidoOnchangeHandler} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={email} onChange={emailOnchangeHandler} />
            </label>
            <input type="submit" value="Finalizar Compra" onClick={finalizarCompra} />
            <input type="reset" value="Reiniciar" />
          </form>
        </>
      )}

    </>
  );
};