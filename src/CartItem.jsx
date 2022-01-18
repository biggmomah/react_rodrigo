import React, { useContext } from "react";
import { CartContext } from './Context'

const CartItem = () => {

    const {name, image, id } = personaje
    const {removeItem} = useContext(CartContext)

    return(
        <div className="container">
            <h4>{name}</h4>

            <img style={{width:'60px', height:'60px'}} src={image}/>

            <h4>{contador}</h4>

            <button onClick={() =>removeItem(id) }> Borrar</button>
        </div>
    )

}

export default CartItem