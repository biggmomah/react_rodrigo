import Navbar from './Navbar'
import Main from './Main'
import {BrowserRouter} from 'react-router-dom'
import CarritoProvider from './Context'



function App(){
 
    return (
    <CarritoProvider>

        <BrowserRouter>
            <Navbar/>
            <Main/>
        </BrowserRouter>

    </CarritoProvider>

    )
}

// Exportando llamamos al componente de index.js
export default App 