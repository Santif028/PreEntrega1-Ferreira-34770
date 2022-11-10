import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import { styles } from "./Cart.style";
import { dataBase } from "../../Firebase/Firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Cart = () => {
  const { cart, total, clear } = useContext(Context);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");

  const nombreOnchangeHandler = (e) => {
    setNombre(e.target.value)
  }
  const apellidoOnchangeHandler = (e) => {
    setApellido(e.target.value)
  }
  const telefonoOnchangeHandler = (e) => {
    setTelefono(e.target.value)
  }
  const emailOnchangeHandler = (e) => {
    setEmail(e.target.value)
  }
  const email2OnchangeHandler = (e) => {
    setEmail2(e.target.value)
  }


  const comprador = {
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    email: email,
  };

  const MySwal = withReactContent(Swal)

  const finalizarCompra = (e) => {
    e.preventDefault()
    if (email2 !== email) {
      return Swal.fire({
        position: 'bottom-end',
        icon: 'warning',
        title: 'Los mails deben coincidir',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      const ventasCollection = collection(dataBase, "ventas");
      addDoc(ventasCollection, {
        comprador,
        items: cart,
        total,
        date: serverTimestamp()
      })
        .then(result => {
          return MySwal.fire({
            title: <p>Compra realizada con éxito</p>,
            html: <i>El id de su compra es: {result.id}</i>,
            icon: "success"
          })
        })
        .catch(e => {
          console.log('error');
          console.log(e);
        });

      cart.forEach((producto, i) => {
        const updateStock = doc(dataBase, "productos", producto.id)
        updateDoc(updateStock, { stock: producto.stock - cart[i].cantidad })
      });

      clear();
    }
  }

  const borrarCarrito = () => {
    clear()
  }


  return (
    <div style={styles.divCart}>
      {cart.length === 0 ? (
        <h1 style={styles.h1}>
          Su carrito se encuentra vacío, presione <Link to="/">aqui</Link> para seguir comprando.
        </h1>
      ) : (
        <div style={styles.divCart2}>
          <div style={styles.divCart3}>
            {cart.map((producto) => (
              <>
                <ul>
                  <li>
                    <h1 key={producto.id}>{producto.cantidad} X {producto.title} - ${producto.price}</h1>
                  </li>
                </ul>
              </>
            ))}
            <h1 style={styles.total}>TOTAL: ${total}</h1>
            <button onClick={borrarCarrito} style={styles.botones}>Borrar Carrito</button>
          </div>
          <form onSubmit={finalizarCompra} name="usuarios" style={styles.form}>
            <div>
              <label>Nombre:
                <abbr title="required" aria-label="required">*</abbr>
              </label>
              <input style={styles.inputs} type="text" name="user_name" required onChange={nombreOnchangeHandler} />
            </div>
            <div>
              <label>Apellido:
                <abbr title="required" aria-label="required">*</abbr>
              </label>
              <input style={styles.inputs} type="text" name="user_surname" required onChange={apellidoOnchangeHandler} />
            </div>
            <div>
              <label>Teléfono:
                <abbr title="required" aria-label="required">*</abbr>
              </label>
              <input style={styles.inputs} type="tel" name="user_tel" required onChange={telefonoOnchangeHandler} />
            </div>
            <div>
              <label>Email:
                <abbr title="required" aria-label="required">*</abbr>
              </label>
              <input style={styles.inputs} type="email" name="user_mail" required onChange={emailOnchangeHandler} />
            </div>
            <div>
              <label>Repita su Email:
                <abbr title="required" aria-label="required">*</abbr>
              </label>
              <input style={styles.inputs} type="email" name="user_mail2" required onChange={email2OnchangeHandler} />
            </div>
            <button style={styles.botones} type="submit">Finalizar Compra</button>
            <button style={styles.botones} type="reset">Borrar</button>
          </form>
        </div>
      )}
    </div>
  );
};