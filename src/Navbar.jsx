import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

function Navbar(){

    // const {cantidad}= useContext(context)
 

    return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

            <Link to="/" className="navbar-brand">
                <img src="/img/logo.png" alt="" width='100' height='80' className="d-inline-block align-text-middle"/>
                Proyecto E-commerce
            </Link>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav justify-content-evenly w-100">
                    <li className="nav-item">
                        <Link to="/categoria/mineria" className="nav-link">Mineria</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/categoria/placas" className="nav-link">Placas</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="categoria/billetera" className="nav-link">Billeteras</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="/cart">
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