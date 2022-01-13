import { createContext, useState } from 'react'


export const context= createContext({
    
});

const {Provider} = context

const CarritoProvider = ({children}) =>{

    const[carrito, setCarrito]= useState([])
    const[cantidad, setCantidad]=useState(0)
    const[precio_total,setPrecio_total]=useState(0)

    const valorContexto = {
        carrito, 
        precio_total, 
        cantidad, 
        agregarProducto
    }
    

    const agregarProducto = (personajes) => {
        console.log(personajes)
    }

    const eliminarProducto= (id) => {

    }

    const editarProducto = (id, cantidad) => {

    }

    const limpiarCarrito = () => {

    }

    const isInCart = () => {

    }
    
    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CarritoProvider


