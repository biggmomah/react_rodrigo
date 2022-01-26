import React, {createContext, useState} from 'react'


export const CartContext = createContext()


const CartProvider = ({children}) =>{

    const[carArray, setCartArray] = useState([])
    
    
    const addToCart = (item) => {

        const {id} = item

        const index = carArray.findIndex((i) => i.id === id);

        if (index > -1){

          console.log('Este producto ya ha sido agregado')

        }else{

            setCartArray([...carArray, item])
        }}

    
    const removeItem = (id) => {
        const items = carArray.filter((i) => i.id !== id)
        setCartArray(items)
    }

    const clearCart = () => {
        setCartArray([])
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

