import React, { useEffect, useState } from "react";
import { styles } from "./ItemListContainer.style";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { dataBase } from "../../../Firebase/Firebase";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => { 
    const getData = async () => {
      const queryRef = !id
        ? collection(dataBase, "productos")
        : query(
          collection(dataBase, "productos"),
          where("category", "==", id)
        );
      const response = await getDocs(queryRef);
      const productos = response.docs.map((doc) => {
        const newProduct = {
          ...doc.data(),
          id: doc.id,
        };
        return newProduct;
      });
      setTimeout(() => {
        setProducts(productos);
        setLoading(false)
      },)
    }; 
    getData();
  }, [id]);

  return (
    <div style={{height: id === undefined ? "none" : "100vh"}}>
      <h1 style={styles.h1}>{greeting}</h1>
      {<>{loading ? <h1>Aguarde un momento...</h1> : <ItemList products={products} />}</>}
    </div>
  );
};
