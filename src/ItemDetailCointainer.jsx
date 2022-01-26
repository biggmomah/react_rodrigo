import { useContext, useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Loading from "./Loading"
import {db} from './firebase'
import {collection, getDoc, doc} from 'firebase/firestore'


function ItemDetailCointaner(){
    

    const [productos, setProductos]= useState([])

    const [loading, setLoading]=useState(false)
    const {id} = useParams()
    
    useEffect(()=>{
        const coleccionProductos = collection(db, 'productos')
        const pedido = doc(coleccionProductos, id)
        const docs = getDoc(pedido)
      

        docs
            .then((resultado) => {
                  const producto = resultado.data()
               
                setProductos(producto)
                setLoading(true)
            })
            .catch((error) => {
                console.log(error)
            })

            return()=>{
                setLoading(false)
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
                        <ItemDetail producto={productos} id={id}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemDetailCointaner
