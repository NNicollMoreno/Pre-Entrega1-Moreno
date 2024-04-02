import React from "react";
import { Card, Button } from "react-bootstrap";

const ItemListCards = ({ greeting }) => {
  return (
    <div className="item-list-cards">
      <h2>{greeting}</h2>
      <div className="card-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>This is a description for card 1.</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>This is a description for card 2.</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>This is a description for card 3.</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ItemListCards;
