import React, { useContext } from "react";
import { CartContext } from './Context'


const CartItem = ({producto, id, cantidad}) => {

    const {name, imagen} = producto
    const {removeItem} = useContext(CartContext)

    return(
        <div className="itemDetail">
        <h4 className="text-center">{name}</h4>
        <div className="imageContainer">
        <img src={imagen} className="imgCard"/></div>
        <h4 className="text-center">Cantidad: {cantidad}</h4>
        <button style={{width:'100%', margin:' 0 5px'}} onClick={() =>removeItem(id) } className="btn btn-outline-dark"> Eliminar producto</button>
    </div>
    )

}

export default CartItem