import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Loading from "./Loading"

function ItemDetailCointaner(){

    const [personajes, setPersonajes] = useState({})
    const [loading, setLoading]=useState(true)
    const {id} = useParams()
    const url = `https://rickandmortyapi.com/api/character/${id}`

    useEffect(()=>{
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                setLoading(false)
                setPersonajes(data)
            })
            .catch(error=>console.log(error));
        },[id])
    

    return(
        <div className="container">
            <div className="row justify-content-between">
                    <div style={{display:'flex', flexWrap:'wrap'}}>
                        <ItemDetail personaje={personajes} />
                    </div>                

            </div>
        </div>
    )
}

export default ItemDetailCointaner
