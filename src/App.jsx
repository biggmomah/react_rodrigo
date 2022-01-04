import Navbar from './Navbar'
import ItemListContainer from './ItemListContainer'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import ItemDetailCointaner from './ItemDetailCointainer'
import {BrowserRouter} from 'react-router-dom'
 

function App(){

    const dato= {
        nombre: "PRODUCTO 1",
        precio: 1
    }

    return (

    <BrowserRouter>
     <Navbar/>
     <ItemDetailCointaner/>
     <ItemList/>
    </BrowserRouter>

    )
}

// Exportando llamamos al componente de index.js
export default App 