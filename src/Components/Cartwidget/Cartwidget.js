import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Context } from "../../Context/Context";

const Cartwidget = () => {
  const { qty } = useContext(Context);
  return (
    <>
      <p style={{alignSelf: "center"}}>{qty}</p>
      <ShoppingCartIcon fontSize="large" />
    </>
  );
};

export default Cartwidget