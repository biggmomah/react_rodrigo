import { useEffect, useState } from 'react'
import Item from './Item'



const productosIniciales=[
    {id: 1 , nombre: 'producto 1', stock: 5},
    {id: 2 , nombre: 'producto 2', stock: 5},
    {id: 3 , nombre: 'producto 3', stock: 5},
    {id: 4 , nombre: 'producto 4', stock: 5}
]

function ItemList(){
    /* useEffect(()=>{
        console.log('soy un efecto')
        
        setTimeout(()=>{
            console.log('soy el timeout')
        }, 5000)
        
        setInterval(()=>{
            console.log('efecto de interval')
        }, 2000)
    }) */
    

    const [productos, setProductos]= useState([]);
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        console.log('EFECTO')
        

        const promesa = new Promise((res, rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            }, 2000)
        })

        promesa.then((productos)=>{
            console.log(productos)
            setLoading(false)
            setProductos(productos)
        })


    }, [])

    return(
        <div className="container">
            <div className="row justify-content-between">
                {
                    loading ? (<div className="container">CARGANDO....</div>) : (productos.map((producto)=> <Item key={productos.id} producto={producto}/>))
                }
            </div>
        </div>
   )
}

export default ItemList