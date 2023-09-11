import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import StickyFooter from "./Components/Footer/Footer";
import { ItemListContainer } from "./Containers/ItemListContainer/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer/ItemDetailContainer";
import {Cart}  from "./Containers/CartView/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./Context/Context";

const App = () => {
  const greeting = "Bienvenido a MotoRep";
  return (
    <>
      <BrowserRouter>
      <CustomProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={greeting} />}/>
          <Route path="/categoria/:id" element={<ItemListContainer greeting={greeting}/>}/>
          <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<ItemListContainer/>}/>
        </Routes>
        <StickyFooter/>
        </CustomProvider>
      </BrowserRouter>
    </>
  )
}

export default App