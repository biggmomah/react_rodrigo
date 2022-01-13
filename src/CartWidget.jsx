import { useContext } from "react"
import {context } from './Context'

function CartWidget(){

    const {carrito, cantidad_total} = useContext(context)

    console.log(carrito, cantidad_total)
    return(

        <img src="/img/carrito.png" alt="" width='60' height='60'/>

    )   
}

export default CartWidget