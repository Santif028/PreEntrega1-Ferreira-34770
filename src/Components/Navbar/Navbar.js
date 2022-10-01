import { style } from "@mui/system";
import React from "react";
import Cartwidget from "../Cartwidget/Cartwidget";
import {styles} from "./Navbar.style"


const Navbar = () =>{
    return (
        <header style={styles.header}>
            <h1 style={styles.h1}>MotoRep</h1>
            <nav style={styles.nav}>
                <ul style={styles.navUl}>
                    <li style={styles.navUlLi}><a style={styles.anchors} href="">CASCOS</a></li>
                    <li style={styles.navUlLi}><a style={styles.anchors} href="">EQUIPO DE VIAJE</a></li>
                    <li style={styles.navUlLi}><a style={styles.anchors} href="">PARTES</a></li>
                    <li style={styles.navUlLi}><a style={styles.anchors} href="">ACCESORIOS</a></li>
                    <li style={styles.navUlLi}><a style={styles.anchors} href="">NEUMATICOS</a></li>
                    <li style={styles.navUlLi}><a style={styles.anchors} href="">OFERTAS</a></li>
                </ul>
            </nav>
            <div id="divCarrito" style={styles.divCarrito}>
             <a style={styles.anchors} href=""><Cartwidget/></a>   
            </div>
        </header>
    )
}

export default Navbar;