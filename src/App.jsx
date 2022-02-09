import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
import {BrowserRouter} from 'react-router-dom'
import CartProvider from './Context'



function App(){
 
    return (
    <CartProvider>

        <BrowserRouter>
            <Navbar/>
            <Main/>
            <Footer/>
        </BrowserRouter>

    </CartProvider>

    )
}

// Exportando llamamos al componente de index.js
export default App 