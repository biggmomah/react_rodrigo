import ItemListCointainer from "./ItemListContainer";
import {Routes, Route} from 'react-router-dom'
import ItemDetailCointaner from "./ItemDetailCointainer";

function Main(){
    return(
        <main>
            <Routes>
                <Route path='/' element={<ItemListCointainer/>}/>
                <Route path='/personaje/:id' element={<ItemDetailCointaner/>}/>
            </Routes>

        </main>
    )
}

export default Main