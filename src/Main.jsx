import ItemListCointainer from "./ItemListContainer";
import ItemDetailCointaner from "./ItemDetailCointainer";
import Cart from "./Cart";
import {Routes, Route} from 'react-router-dom'

function Main(){
    return(
        <main>
            <Routes>
                <Route path='/' element={<ItemListCointainer/>}/>
                <Route path='/categoria/:id' element={<ItemListCointainer/>}/>
                <Route path='/producto/:id' element={<ItemDetailCointaner/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>

        </main>
    )
}

export default Main