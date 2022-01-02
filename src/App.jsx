import Navbar from './Navbar'
import ItemListContainer from './ItemListContainer'
import ItemCount from './ItemCount'
import ItemList from './ItemList'




function App(){

    const dato= {
        nombre: "PRODUCTO 1",
        precio: 1
    }

    return (
    <>
     <Navbar/>
     <ItemListContainer titulo={dato}/>
     <ItemCount stock={5} initial={1} />
     <ItemList/>
     
    </>
    )
}

// Exportando llamamos al componente de index.js
export default App 