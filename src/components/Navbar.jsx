import React, { useState } from "react";
import { Navbar, Nav, Button, NavLink } from "react-bootstrap";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";
import logo from "../../img/Recurso 151l1.png";

function NavigationBar() {
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
            <NavLink to="#home">
              <Button
                variant="outline-secondary"
                style={{ marginRight: "10px" }}
              >
                Inicio
              </Button>
            </NavLink>
            <NavLink to="category/pie" as={NavLink}>
              <Button
                variant="outline-secondary"
                style={{ marginRight: "10px" }}
              >
                Pie
              </Button>
            </NavLink>
            <NavLink to="category/Torta" as={NavLink}>
              <Button
                variant="outline-secondary"
                style={{ marginRight: "10px" }}
              >
                Torta
              </Button>
            </NavLink>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ItemListContainer />
    </>
  );
}

export default NavigationBar;
