/*import React from "react";
import { Modal, Button } from "react-bootstrap";

function ItemListContainer({ greeting, show, onClose }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>{greeting}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Agregado correctamente</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ItemListContainer;*/
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { ItemListCards } from "./ItemListCards";
import React from "react";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const refCollection = collection(db, "items");
      const querySnapshot = await getDocs(refCollection);
      const productosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(productosData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {productos.map((producto) => (
        <ItemListCards key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemListContainer;
