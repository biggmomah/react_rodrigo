// Los hooks ('useState') no pueden incluirse en condiconales, el primer valor si no es asignado se toma como undefined,
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import ItemList from './ItemList'

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
    const {id} = useParams();

    if(id){
        console.log('personaje' + id)
    }else{
        console.log('todos los personajes')
    }

// const initialUrl='https://rickandmortyapi.com/api/character'

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
            .then((response)=>response.json())
            .then((data)=>{
                setLoading(false)
                setPersonajes(data.results)
            })
            .catch(error=>console.log(error))
        },[id])

    return(
        <div className="container">
            <div className="row justify-content-between">
                {
                    loading
                    ? 
                    (<div className="container">CARGANDO....</div>)
                    :
                    <div style={{display:'flex', flexWrap:'wrap'}}> <ItemList personajes={personajes}/> </div>                
                }
            </div>
        </div>
)
}

export default ItemListCointainer