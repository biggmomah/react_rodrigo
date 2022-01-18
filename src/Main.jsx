import ItemListCointainer from "./ItemListContainer";
import ItemDetailCointaner from "./ItemDetailCointainer";
import Cart from "./Cart";
import {Routes, Route} from 'react-router-dom'
import CartWidget from "./CartWidget";

function Main(){
    return(
        <main>
            <Routes>
                <Route path='/' element={<ItemListCointainer/>}/>
                <Route path='/category/:id' element={<ItemListCointainer/>}/>
                <Route path='/personaje/:id' element={<ItemDetailCointaner/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>

        </main>
    )
}

export default Main