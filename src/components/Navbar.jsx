import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import CartWidget from "./CartWidget.jsx";
import ItemListContainer from "./ItemListContainer.jsx";
import logo from "../../img/Recurso 151l1.png";

function NavigationBar() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="mx-auto"
        style={{ alignItems: "center", width: "100%" }}
      >
        <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "10%", height: "10%", padding: "10px" }}
          />
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
