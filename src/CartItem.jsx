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
                    <h4 className="text-center">{name}</h4>
                    <Container style={{width:'300px', height:'300px'}}>
                    <img src={imagen} style={{width: "100%"}}/>
                    </Container>
                    <h4 className="text-center">Cantidad: {cantidad}</h4>
                    <button onClick={() =>removeItem(id) } className="btn btn-outline-dark"> Borrar</button>
                </Card>
            </Row>
        </Container>
    )

}

export default CartItem