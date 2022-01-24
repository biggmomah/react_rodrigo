import { useContext, useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Loading from "./Loading"
import {db} from './firebase'
import {collection, getDocs} from 'firebase/firestore'


function ItemDetailCointaner(){
    const coleccionProductos = collection(db, 'productos')

    const [personajes, setPersonajes] = useState({})
    const [productos, setProductos]= useState([])

    const [loading, setLoading]=useState(false)
    const {id} = useParams()
    
    useEffect(()=>{

        const pedido = getDocs(coleccionProductos)
        console.log(pedido)

        pedido
            .then((resultado) => {
                const docs = resultado.docs
                const docs_reset= docs.map(doc=>{
                    const producto ={
                        id: doc.id,
                        ...doc.data()
                    }
                   return(producto)
                })
                setProductos(docs_reset)
                setLoading(true)
            })
            .catch((error) => {
                console.log(error)
            })

            return()=>{
                setLoading(true)
            }
        // const url = `https://rickandmortyapi.com/api/character/${id}`
        // fetch(url)
        //     .then((response)=>response.json())
        //     .then((data)=>{
        //         setLoading(true)
        //         setPersonajes(data)
        //     })
        //     .catch(error=>console.log(error));

        //     return()=>{
        //         setLoading(true)
        //     }
            
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
                        <ItemDetail producto={productos}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemDetailCointaner
