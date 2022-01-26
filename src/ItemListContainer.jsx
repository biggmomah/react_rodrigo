import {useContext, useEffect,useState} from 'react'
import {useParams} from "react-router-dom";
import ItemList from './ItemList'
import Loading from './Loading';
import {db} from './firebase'
import {collection, getDocs, query, where} from 'firebase/firestore'

function ItemListCointainer(){

    
    const {id} = useParams();

    
    const [personajes, setPersonajes] = useState([])
    const [loading, setLoading]=useState(true)
    const [productos, setProductos]= useState([])
    
    // const initialUrl='https://rickandmortyapi.com/api/character'
    
    
    
    useEffect(()=>{
        const coleccionProductos = collection(db, 'productos')

        const listaProductos =
                  (id === "placas") ? query(coleccionProductos, where("categoria", "==", id))
                : (id === "mineria") ? query(coleccionProductos, where("categoria", "==", id))
                : coleccionProductos ;

        const pedido = getDocs(listaProductos)
     

        pedido
            .then((resultado) => {
                const docs = resultado.docs;

                const docs_reset= docs.map(doc=>{

                    const producto ={
                        id: doc.id,
                        ...doc.data()
                    }    
                    return producto            })
                    
                setProductos(docs_reset)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })

        // fetch(url)
        //     .then((response)=>response.json())
        //     .then((data)=>{
        //         setLoading(false)
        //         setPersonajes(data.results)
        //     })
        //     .catch(error=>console.log(error))
        },[id])


    return(
        <div className="container">
            <div className="row justify-content-between">
                {
                    loading
                    ? 
                    (<Loading/>)
                    :
                    <ItemList productos={productos}/>             
                }
            </div>
        </div>
)
}

export default ItemListCointainer