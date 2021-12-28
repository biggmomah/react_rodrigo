import { useState,useEffect } from 'react'
import Navbar from './Navbar'
import ItemListContainer from './ItemListContainer'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import Personajes from './Personajes'



function App(){

    const dato= {
        nombre: "PRODUCTO 1",
        precio: 1
    }

    const [personajes, setPersonajes] = useState([])

    const initialUrl='https://rickandmortyapi.com/api/character'

    const fetchCharacter= (initialUrl)=>{
        fetch(initialUrl)
            .then(response=>response.json())
            .then(data=>setPersonajes(data.results))
            .catch(error=>console.log(error))
    }

    useEffect(()=>{
        fetchCharacter(initialUrl)
    },[])

    return (
    <>
     <Navbar/>
     <ItemListContainer titulo={dato}/>
     <ItemCount stock={5} initial={1} />
     <ItemList/>
     <div className="container">
        <Personajes personajes={personajes}/>
     </div>
    </>
    )
}

// Exportando llamamos al componente de index.js
export default App 