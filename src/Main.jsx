import ItemListCointainer from "./ItemListContainer";
import ItemDetailCointaner from "./ItemDetailCointainer";
import {Routes, Route} from 'react-router-dom'

function Main(){
    return(
        <main>
            <Routes>
                <Route path='/' element={<ItemListCointainer/>}/>
                <Route path='/category/:id' element={<ItemListCointainer/>}/>
                <Route path='/personaje/:id' element={<ItemDetailCointaner/>}/>
            </Routes>

        </main>
    )
}

export default Main