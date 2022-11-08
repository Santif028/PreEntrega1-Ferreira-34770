import React, { useEffect, useState } from "react";
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { dataBase } from "../../../Firebase/Firebase";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const productCollection = collection(dataBase, "productos");
    const q = query(productCollection, where("category", "==", id))
    getDocs(id !== undefined ? q : productCollection )
      .then((result) => {
        const productList = result.docs.map((item) => {
          return {
            ...item.data(),
            id: item.id,
          }
        })
        setProducts(productList);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false))
  }, [id]);

  return (
    <>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Aguarde un momento...</h1> : <ItemList products={products} />}</>}
    </>
  );
};
