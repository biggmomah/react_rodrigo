import CartWidget from './CartWidget'

function Navbar(){
    return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

            <a href="foo" className="navbar-brand">
                <img src="/img/logo.png" alt="" width='100' height='80' className="d-inline-block align-text-middle"/>
                Proyecto E-commerce
            </a>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav justify-content-evenly w-100">
                    <li className="nav-item">
                        <a href="foo" className="nav-link">Noticias</a>
                    </li>

                    <li className="nav-item">
                        <a href="foo" className="nav-link">Conocenos</a>
                    </li>

                    <li className="nav-item">
                        <a href="foo" className="nav-link">Productos</a>
                    </li>

                    <li className='nav-item'>
                        <a href="foo">
                            <CartWidget/>
                        </a>
                    </li>

                </ul>
            </div>
        </div>

    </nav>
       
    )
}

export default Navbar
