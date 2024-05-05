import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
/*import { useNavigate } from "react-router-dom";

const ItemListCards = ({ greeting }) => {
  const navigate = useNavigate();

  const objetos = [
    {
      img: "https://www.saborusa.com/cr/wp-content/uploads/sites/14/2020/06/81.-Pie-de-manzana.png",
      id: 1,
      desc: "Sumérgete en el encanto nostálgico de nuestro Apple Pie, una obra maestra artesanal que captura la esencia reconfortante de la cocina casera. La combinación perfecta.",
      name: "Pie de Manzana",
    },
    {
      img: "https://www.goya.com/media/4013/strawberry-and-chocolate-ice-cream-cake.jpg?quality=80",
      id: 2,
      desc: "Bienvenido a un mundo donde la frescura y la indulgencia se encuentran en una danza perfecta: nuestra irresistible Ice Cream Cake. Sumérgete en la delicia con capas generosas de helado suave.",
      name: "Torta de Helado",
    },
    {
      img: "https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4216cb5b181b75dea1062cb02762a963.jpg",
      id: 3,
      desc: "Déjate seducir por la armonía perfecta entre la frescura del limón y la indulgencia de una masa que se deshace en cada bocado. Nuestro Lemon Pie es una oda a la delicadeza y el equilibrio.",
      name: "Pie de Limon",
    },
  ];

  const handleItemClick = (objeto) => {
    navigate(`/item/${objeto.id}`, { state: { objeto } });
  };

  return (
    <div className="item-list-cards">
      <h2>{greeting}</h2>
      <div className="container">
        <table className="table">
          <tbody>
            <tr>
              {objetos.map((objeto) => (
                <td key={objeto.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      alt="Imagen de producto"
                      variant="top"
                      src={objeto.img}
                    />
                    <Card.Body>
                      <Card.Title>{objeto.name}</Card.Title>
                      <Card.Text>{objeto.desc}</Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => handleItemClick(objeto)}
                      >
                        Ver producto
                      </Button>
                    </Card.Body>
                  </Card>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemListCards;*/

export const ItemListCards = ({ producto }) => {
  // Verificar si producto es undefined o null antes de acceder a sus propiedades
  if (!producto) {
    return null; // O manejar el caso de objeto faltante de alguna otra manera
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={producto.imageId} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>{producto.description}</Card.Text>
        <Card.Text>{producto.categoryId}</Card.Text>
        <Link to={`/item/${producto.id}`}>
          <Button variant="primary">Go Somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ItemListCards;
