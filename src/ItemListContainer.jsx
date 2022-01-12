// Los hooks ('useState') no pueden incluirse en condiconales, el primer valor si no es asignado se toma como undefined,
import {useEffect,useState} from 'react'
import ItemList from './ItemList'
import {useParams} from "react-router-dom";
import Loading from './Loading';


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
    const {id} = useParams();
    const url = !id ? 'https://rickandmortyapi.com/api/character/' : 'https://rickandmortyapi.com/api/character/?gender='+id

    const [personajes, setPersonajes] = useState([])
    const [loading, setLoading]=useState(true)

// const initialUrl='https://rickandmortyapi.com/api/character'

    useEffect(()=>{
        fetch(url)
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
                    (<Loading/>)
                    :
                    <ItemList personajes={personajes}/>             
                }
            </div>
        </div>
)
}

export default ItemListCointainer