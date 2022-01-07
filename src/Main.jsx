import ItemListCointainer from "./ItemListContainer";
import {Routes, Route} from 'react-router-dom'

function Main(){
    return(
        <main>
            <Routes>
                <Route path='/' element={<ItemListCointainer/>}/>
                <Route path='/personaje/:id' element={<ItemListCointainer/>}/>
            </Routes>

        </main>
    )
}

export default Main