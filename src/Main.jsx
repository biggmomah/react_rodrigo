import ItemListCointainer from "./ItemListContainer";
import ItemDetailCointaner from "./ItemDetailCointainer";
import {Routes, Route} from 'react-router-dom'
import CartWidget from "./CartWidget";

function Main(){
    return(
        <main>
            <Routes>
                <Route path='/' element={<ItemListCointainer/>}/>
                <Route path='/category/:id' element={<ItemListCointainer/>}/>
                <Route path='/personaje/:id' element={<ItemDetailCointaner/>}/>
                <Route path='/carrito' element={<CartWidget/>}/>
            </Routes>

        </main>
    )
}

export default Main