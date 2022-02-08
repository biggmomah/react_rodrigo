import React, { useContext } from "react";
import {db} from './firebase'
import {collection, addDoc} from 'firebase/firestore'
import {CartContext, clearCart} from './Context'
import CartItem from "./CartItem";
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import { useState } from "react";

const Cart = () => {

    const{carArray, clearCart, priceTotal} = useContext(CartContext);
    const [orden, setOrden]=useState(false)
    const carritoVacio = carArray.lenght < 1;

    const crearOrden = () => {
        const coleccionProductos = collection(db, 'ordenes')

        const usuario={
            nombre: "juan",
            email: "xxx@xxx.com",
            tel: '123456789'
        }

        const orden={
            usuario,
            carArray
        }

        const pedido = addDoc(coleccionProductos, orden)

        pedido
        .then((resultado)=>{
            setOrden(resultado.id)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return(
        <>
         <Col className='col-md-4'>
            { carritoVacio ? <h2>No hay productos agregados</h2> : carArray.map((item)=> (<CartItem key={item.id} producto={item.producto} cantidad={item.cantidad} id={item.id}/>))
            }
        </Col>
        
        <Col className="cartCompra">
            <button onClick={clearCart} className="btn btn-danger">Vaciar carro</button>
            <button onClick={crearOrden} className="btn btn-primary">Confirmar compra</button>
            <h4 className="text-center"> Total = ${priceTotal()}</h4>
            {orden && <p className="center"> Orden: {orden} </p>}
        </Col>
        </>
    )
}

export default Cart