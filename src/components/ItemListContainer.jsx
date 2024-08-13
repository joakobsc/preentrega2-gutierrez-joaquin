import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import data from "../data/inventario.json";

export const ItemListContainer = () => {
  const [Items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    new Promise((res, rej) => {
      setTimeout(() => res(data), 2000);
    })
      .then((response) => {
        setItems(response);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return "wait";
  return (
    <Container className="mt-4 d-flex">
      {Items.map((i) => (
        <Card key={i.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};
