import React, {createContext, useState} from 'react'


export const CartContext = createContext()


const CartProvider = ({children}) =>{

    const[carArray, setCartArray] = useState([])
    
    
    const addToCart = (personaje, cantidad) => {
        const index = carArray.findIndex((i) => i.personaje.id == personaje.id)
        if (index > -1){
            return console.log('Este producto ya ha sido agregado')
        }else{
            return setCartArray([...carArray, {personaje, cantidad}])
        }
    }
    console.log(carArray)
    
    const removeItem = (id) => {
        const items = carArray.filter( (i) => i.personaje.id =! id )
        setCartArray(items)
    }

    const clearCart = () => {
        setCartArray([])
    }


    const value = {
        carArray,
        addToCart,
        clearCart,
        removeItem
    }

    return(
        <CartContext.Provider value={value}>  
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider


