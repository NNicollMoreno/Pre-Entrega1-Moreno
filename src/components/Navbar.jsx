import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import CartWidget from "./CartWidget.jsx";
import ItemListContainer from "./ItemListContainer.jsx";
import ItemListContainer from "./ItemListCards.jsx";

function NavigationBar() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Navbar
        expand="lg"
        style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
      >
        <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
          Amai Pastry Shop
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Button variant="outline-secondary" style={{ marginRight: "10px" }}>
              Inicio
            </Button>
            <Button variant="outline-secondary" style={{ marginRight: "10px" }}>
              Sobre Nosotros
            </Button>
            <Button variant="outline-secondary" style={{ marginRight: "10px" }}>
              Productos
            </Button>
            <Button variant="outline-secondary" style={{ marginRight: "10px" }}>
              Contacto
            </Button>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {showModal && <ItemListContainer onClose={toggleModal} />}
    </>
  );
}

export default NavigationBar;
