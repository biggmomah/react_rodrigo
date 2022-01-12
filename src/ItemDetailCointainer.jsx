import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Loading from "./Loading"

function ItemDetailCointaner(){

    const [personajes, setPersonajes] = useState({})
    const [loading, setLoading]=useState(false)
    const {id} = useParams()
    
    useEffect(()=>{
        const url = `https://rickandmortyapi.com/api/character/${id}`
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                setLoading(true)
                setPersonajes(data)
            })
            .catch(error=>console.log(error));

            return()=>{
                setLoading(true)
            }
            
        },[id])
    

    if(!loading){
        return(
            <Loading/>
        )
    }else{
        return(
            <div className="container">
                <div className="row justify-content-between">
                    <div style={{display:'flex', flexWrap:'wrap'}}>
                        <ItemDetail personaje={personajes}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemDetailCointaner
