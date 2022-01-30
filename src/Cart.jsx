import React, { useContext } from "react";
import {db} from './firebase'
import {collection, addDoc} from 'firebase/firestore'
import {CartContext, clearCart} from './Context'
import CartItem from "./CartItem";
import Row from 'react-bootstrap/Row'
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
        <Row>
            { carritoVacio ? <h2>No hay productos agregados</h2> : carArray.map((item)=> (<CartItem key={item.id} producto={item.producto} cantidad={item.cantidad} id={item.id}/>))}
            <button onClick={clearCart} className="btn btn-danger mt-5">Vaciar carro</button>
            <button onClick={crearOrden} className="btn btn-primary mt-5">Confirmar compra</button>
            <h4> Total = ${priceTotal()}</h4>
            {orden && <p> Orden: {orden} </p>}
        </Row>
    )
}

export default Cart