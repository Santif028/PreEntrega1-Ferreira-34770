import { style } from "@mui/system";
import React from "react";
import Cartwidget from "../Cartwidget/CartWidget";
import {styles} from "./Navbar.style"
import {Link, NavLink} from "react-router-dom";


const Navbar = () =>{
    const categorias = [
        { nombre: "electronics", id: 0, ruta: "/categoria/electronics" },
        { nombre: "jewelery", id: 1, ruta: "/categoria/jewelery" },
        { nombre: "men's clothing", id: 2, ruta: "/categoria/men's clothing" },
        { nombre: "women's clothing", id: 3, ruta: "/categoria/women's clothing" },
      ];
    return (
        <header style={styles.header}>
            <Link style={styles.anchors} to="/">
            <h1 style={styles.h1}>MotoRep</h1>
            </Link>
            <nav style={styles.nav}>
                
                {categorias.map((categoria) => {
                    return (
                        <NavLink  style={styles.anchors} key={categoria.id} to={categoria.ruta}>{categoria.nombre}</NavLink>
                    );
                })}
                
            </nav>
            <Link style={styles.anchors} to="/cart">
            <div id="divCarrito" style={styles.divCarrito}>
             <Cartwidget/>   
            </div>
            </Link>    
        </header>
    )
}

export default Navbar;