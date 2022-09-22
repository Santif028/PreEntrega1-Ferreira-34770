import React from "react";
import "./Header.css"
//import logo from "../../assets/logo.jpeg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () =>{
    return (
        <header>
            <img src="" alt="" />
            <h1>Titulo de mi página</h1>
            <nav>
                <a href="">Categoria 1</a>
                <a href="">Categoria 2</a>
                <a href="">Categoria 3</a>
                <a href="">Categoria 4</a>
            </nav>
            <ShoppingCartIcon/>
        </header>
    )
}

export default Header