import React from "react";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "./Context";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

function ItemDetail({ producto, id }) {
  const { name, precio, imagen } = producto;
  const { addToCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState();

  const item = {
    producto: producto,
    cantidad: +cantidad,
    id: id,
  };

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
  };

  return (
    <Container>
      <Row>
    <Card>
      <Image src={imagen} alt="" className="img-fluid" fluid/>
      <div >
        <Card.Title className="text-center">{name}</Card.Title>
        <p className="text-center"> ${precio}</p>
        <ItemCount initial={1} stock={100} onAdd={onAdd} />
        <button onClick={() => addToCart(item)}>Confirmar</button>
        <Button variant="primary">Primary</Button>{' '}
      </div>d
    </Card>
    </Row>
    </Container>
  );
}

export default ItemDetail;