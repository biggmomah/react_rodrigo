import Navbar from './Navbar'
import ItemListContainer from './ItemListContainer'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import ItemDetailCointaner from './ItemDetailCointainer'



function App(){

    const dato= {
        nombre: "PRODUCTO 1",
        precio: 1
    }

    return (
    <>
     <Navbar/>
     <ItemDetailCointaner/>
    </>
    )
}

// Exportando llamamos al componente de index.js
export default App 