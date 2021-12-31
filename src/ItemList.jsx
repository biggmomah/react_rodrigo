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

    const [personajes, setPersonajes] = useState([])

    const initialUrl='https://rickandmortyapi.com/api/character'

    const fetchCharacter= (initialUrl)=>{
        fetch(initialUrl)
            .then(response=>response.json())
            .then(data=>setPersonajes(data.results))
            .catch(error=>console.log(error))
    }

    useEffect(()=>{
        fetchCharacter(initialUrl)
    },[])

    return(
        <div className="container">
            <div className="row justify-content-between">
                {
                    loading ? (<div className="container">CARGANDO....</div>) : (personajes.map((personajes )=>(<Item personaje={personajes} /> ) ))
                }
            </div>
        </div>
   )
}

export default ItemList