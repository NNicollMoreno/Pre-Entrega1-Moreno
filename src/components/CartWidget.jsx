import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ItemListContainer from "./ItemListContainer";

function CartWidget() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="cart-widget-container">
      <FaShoppingCart className="cart-icon" onClick={toggleModal} />
      <div className="cart-items">5</div>
      <ItemListContainer
        greeting="¡Gracias!"
        show={showModal}
        onClose={toggleModal}
      />
    </div>
  );
}

export default CartWidget;
