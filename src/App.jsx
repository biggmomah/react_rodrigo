import Navbar from './Navbar'
import Main from './Main'
import {BrowserRouter} from 'react-router-dom'
import CartProvider from './Context'



function App(){
 
    return (
    <CartProvider>

        <BrowserRouter>
            <Navbar/>
            <Main/>
        </BrowserRouter>

    </CartProvider>

    )
}

// Exportando llamamos al componente de index.js
export default App 