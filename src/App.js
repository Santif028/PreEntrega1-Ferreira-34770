import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";

const App = () => {
  const greeting = <h2>Bienvenido a MotoRep</h2>
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={greeting} />
    </>
  )
}

export default App

