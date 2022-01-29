import React, { useContext } from "react";
import {CartContext, clearCart} from './Context'
import CartItem from "./CartItem";


const Cart = () => {

    const{carArray, clearCart, priceTotal} = useContext(CartContext);
    const carritoVacio = carArray.lenght < 1;

    return(
        <div className="container">
            { carritoVacio ? <h2>No hay productos agregados</h2> : carArray.map((item)=> (<CartItem key={item.id} producto={item.producto} cantidad={item.cantidad} id={item.id}/>))}
            <button onClick={clearCart} className="btn btn-outline-dark">Vaciar carro</button>
            <h4> Total = ${priceTotal()}</h4>
        </div>
    )
}

export default Cart