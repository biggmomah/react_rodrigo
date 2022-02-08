import React, { useContext } from "react";
import { CartContext } from './Context'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card'

const CartItem = ({producto, id, cantidad}) => {

    const {name, imagen} = producto
    const {removeItem} = useContext(CartContext)

    return(
        <Container>
            <Row>
                <Col xs={6} md={4}>  
                    <Card className="cardContainer">
                        <h4 className="text-center">{name}</h4>
                        <img src={imagen} className="imgCard"/>
                        <h4 className="text-center">Cantidad: {cantidad}</h4>
                        <button onClick={() =>removeItem(id) } className="btn btn-outline-dark"> Eliminar producto</button>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}

export default CartItem