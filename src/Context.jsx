import React, {createContext, useState} from 'react'


export const CartContext = createContext()

const CartProvider = ({children}) =>{

    const[carArray, setCartArray] = useState([])
    
    
    const addToCart = (name, cantidad) => {
        console.log(`agregaste a ${name}, cantidad ${cantidad}`)
        const newObj = {
            item: name,
            cantidad
        }
        
        setCartArray([...carArray, newObj])
    }

 


    const value = {
        carArray,
        addToCart

    }

    return(
        <CartContext.Provider value={value}>  
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

