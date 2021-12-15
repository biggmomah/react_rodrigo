import Navbar from './Navbar'
import ItemListContainer from './ItemListContainer'

function App(){

    const dato= {
        nombre: "PRODUCTO 1",
        precio: 1
    }

    return (
    <>
     <Navbar/>
     <ItemListContainer titulo={dato}/>
    </>
    )
}

// Exportando llamamos al componente de index.js
export default App 