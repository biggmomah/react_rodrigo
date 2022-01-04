import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'
function Navbar(){
    return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

            <Link to="foo" className="navbar-brand">
                <img src="/img/logo.png" alt="" width='100' height='80' className="d-inline-block align-text-middle"/>
                Proyecto E-commerce
            </Link>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav justify-content-evenly w-100">
                    <li className="nav-item">
                        <Link to="foo" className="nav-link">Noticias</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="foo" className="nav-link">Conocenos</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="foo" className="nav-link">Productos</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="foo">
                            <CartWidget/>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>

    </nav>
       
    )
}

export default Navbar
