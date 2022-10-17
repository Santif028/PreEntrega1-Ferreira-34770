import React, { useEffect, useState } from "react";
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const {id} = useParams();
    console.log(id);
  
    const URL_BASE = 'https://fakestoreapi.com/products'
    const URL_CAT = `${URL_BASE}/category/${id}`
  
    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await fetch(id === undefined ? URL_BASE : URL_CAT);
          const data = await res.json();
          setProducts(data);
        } catch {
          console.log("error");
        } finally {
          setLoading(false);
        }
      };
      getProducts();
    }, [id]);

    return (
        <>
            <h1>{greeting}</h1>
            {<>{loading ? <h1>Aguarde un momento...</h1> : <ItemList products={products} />}</>}
        </>
    );
};
