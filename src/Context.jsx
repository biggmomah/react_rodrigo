import React, {createContext, useState} from 'react'
import Swal from 'sweetalert2'

export const CartContext = createContext()


const CartProvider = ({children}) =>{

    const[carArray, setCartArray] = useState([])
    
    
    const addToCart = (item) => {

        const {id} = item

        const index = carArray.findIndex((i) => i.id === id);

        if (index > -1){

          console.log('Este producto ya ha sido agregado')
          Swal.fire(
            'Producto ya solicitado!',
            'Ya agregaste este producto antes',
            'error'
          )

        }else{
            setCartArray([...carArray, item])
            Swal.fire(
                'Producto agregado!',
                'Agregaste el producto al carrito',
                'success'
              )
        }}

    
    const removeItem = (id) => {
        const items = carArray.filter((i) => i.id !== id)
        setCartArray(items)
    }

    const clearCart = () => {
        setCartArray([])
        Swal.fire('Productos elimiminados')
    }

    const priceTotal = () =>{
        return carArray.reduce((acum, i) => acum + i.cantidad * i.producto.precio, 0)
    }

    const value = {
        carArray,
        addToCart,
        clearCart,
        removeItem,
        priceTotal
    }

    return(
        <CartContext.Provider value={value}>  
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

