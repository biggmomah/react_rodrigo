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
        <div className="containerDetail">
      {carritoVacio ? (
        <h2>No hay productos agregados</h2>
      ) : (
        <div className="containerCart">
          {carArray.map((item) => (
            <CartItem
              key={item.id}
              producto={item.producto}
              cantidad={item.cantidad}
              id={item.id}
            />
          ))}
        </div>
      )}
          <div className="botonera">
            <button onClick={clearCart} className="btn btn-danger">
              Vaciar carro
            </button>

            <button onClick={crearOrden} className="btn btn-dark">
              Confirmar compra
            </button>

            <h4 className="text-center"> Total = ${priceTotal()}</h4>
            {orden && (
              <p className="text-center">
                {" "}
                Muchas gracias por elegirnos, su numero de orden es: {
                  orden
                }{" "}
              </p>
            )}
          </div>
    </div>
  );
};

export default Cart