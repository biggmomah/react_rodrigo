// Los hooks ('useState') no pueden incluirse en condiconales, el primer valor si no es asignado se toma como undefined,
import {useEffect,useState} from 'react'
import ItemList from './ItemList'
import {useParams} from "react-router-dom";

function ItemListCointainer(){


// resultado
//     .then((resultado)=>{
//         const productos = resultado.json()
//         return productos
//     })
//     .then((productos)=>{
//         console.log(productos)
//     })

//     .catch((error)=>{
//         console.log(error)
//     })
//     .finally(()=>{
//         console.log('termino todo el pedido')
//     })

    const [personajes, setPersonajes] = useState([])
    const [loading, setLoading]=useState(true)
    const resultado = useParams()
    console.log(resultado)

// const initialUrl='https://rickandmortyapi.com/api/character'

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
            .then((response)=>response.json())
            .then((data)=>{
                setLoading(false)
                setPersonajes(data.results)
            })
            .catch(error=>console.log(error))
        },[])

    return(
        <div className="container">
            <div className="row justify-content-between">
                {
                    loading
                    ? 
                    (<div className="container">CARGANDO....</div>)
                    :
                    <ItemList personajes={personajes}/>             
                }
            </div>
        </div>
)
}

export default ItemListCointainer