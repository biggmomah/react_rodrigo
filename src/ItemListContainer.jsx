// Los hooks ('useState') no pueden incluirse en condiconales, el primer valor si no es asignado se toma como undefined,
import {useContext, useEffect,useState} from 'react'
import {useParams} from "react-router-dom";
import ItemList from './ItemList'
import Loading from './Loading';


function ItemListCointainer(){

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