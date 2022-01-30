import {useContext, useEffect,useState} from 'react'
import {useParams} from "react-router-dom";
import ItemList from './ItemList'
import Loading from './Loading';
import {db} from './firebase'
import {collection, getDocs, query, where} from 'firebase/firestore'
import Container from "react-bootstrap/Container"


function ItemListCointainer(){

    
    const {id} = useParams();

    
    const [loading, setLoading]=useState(true)
    const [productos, setProductos]= useState([])
    
    // const initialUrl='https://rickandmortyapi.com/api/character'
    
    
    
    useEffect(()=>{
        const coleccionProductos = collection(db, 'productos')

        const listaProductos =
                  (id === "placas") ? query(coleccionProductos, where("categoria", "==", id))
                : (id === "mineria") ? query(coleccionProductos, where("categoria", "==", id))
                : (id === "billetera") ? query(coleccionProductos, where("categoria", "==", id))
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
                    return producto
                })
                     
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
        <Container className='d-flex justify-content-center'>
                {
                    loading
                    ? 
                    (<Loading/>)
                    :
                    <ItemList productos={productos}/>             
                }
        </Container>
)
}

export default ItemListCointainer

