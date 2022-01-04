import { useEffect,useState } from "react"
import ItemDetail from "./ItemDetail"

function ItemDetailCointaner(){

    const [personajes, setPersonajes] = useState({})
    const [loading, setLoading]=useState(true)
    const id = 9

    useEffect(()=>{
        const url = `https://rickandmortyapi.com/api/character/${id}`
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                setLoading(false)
                setPersonajes(data)
            })
            .catch(error=>console.log(error));
        },[])
    

    return(
        <div className="container">
            <div className="row justify-content-between">
                {
                    loading
                    ? 
                    (<div className="container">CARGANDO....</div>)
                    :
                    <div style={{display:'flex', flexWrap:'wrap'}}>
                        <ItemDetail personaje={personajes} />
                    </div>                
                }
            </div>
        </div>
    )
}

export default ItemDetailCointaner
