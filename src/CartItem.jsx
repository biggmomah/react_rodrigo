import React, { useContext } from "react";
import { CartContext } from './Context'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'


const CartItem = ({producto, id, cantidad}) => {

    const {name, imagen} = producto
    const {removeItem} = useContext(CartContext)

    return(
        <Container>
            <Row>
            <Card>
            <h4>{name}</h4>

            <img style={{width:'60px', height:'60px'}} src={imagen}/>

            <h4>Cantidad: {cantidad}</h4>

            <button onClick={() =>removeItem(id) }> Borrar</button>
            </Card>
            </Row>
        </Container>
    )

}

export default CartItem