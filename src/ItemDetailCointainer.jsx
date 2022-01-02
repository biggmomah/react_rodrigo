import { useEffect,useState } from "react"
import ItemDetail from "./ItemDetail"

function ItemDetailCointaner(){

    const [personajes, setPersonajes] = useState([])
    const [loading, setLoading]=useState(true)


    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character`)
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
                    <div style={{display:'flex', flexWrap:'wrap'}}>{personajes.map((personajes)=> <ItemDetail key={personajes.id} personaje={personajes} />)}</div>                
                }
            </div>
        </div>
    )
}

export default ItemDetailCointaner
