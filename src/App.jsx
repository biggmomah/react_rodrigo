import Navbar from './Navbar'
import Main from './Main'
import ItemDetailCointaner from './ItemDetailCointainer'
import {BrowserRouter} from 'react-router-dom'
 

function App(){
    return (

    <BrowserRouter>
        <Navbar/>
        <ItemDetailCointaner/>
        <Main/>
    </BrowserRouter>

    )
}

// Exportando llamamos al componente de index.js
export default App 