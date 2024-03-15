import React from "react";
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

export default ItemListContainer;
