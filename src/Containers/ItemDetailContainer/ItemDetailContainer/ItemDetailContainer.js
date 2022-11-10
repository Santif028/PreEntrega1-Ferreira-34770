import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, collection, doc } from "firebase/firestore";
import { dataBase } from "../../../Firebase/Firebase";
import { styles } from "../../../Components/Navbar/Navbar.style";

export const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const productCollection = collection(dataBase, "productos");
    const refDoc = doc(productCollection, id);

    getDoc(refDoc)
    .then((result) =>{
      setProduct({
        id: result.id,
        ...result.data(),
      });
    })
    .catch((error) =>{
      console.log(error);
    })
    .finally(setLoading(false));
  }, [id]);

  return (
    <div style={{height: "100vh"}}>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Aguarde un momento...</h1> : <ItemDetail product={product} style={styles.itemListDiv}/>}</>}
    </div>
  );
}; 