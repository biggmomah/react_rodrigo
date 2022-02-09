import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faTwitter, faTelegram, faGithub} from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

function Footer(){
    
    return(
        <footer className="text-white background">
            <Container>
                <Row>
                    <ul className="col-3 list-unstyled">
                        <li className="font-weight-bold text-uppercase">resources</li>

                        <li>
                            <a href="https://es.tradingview.com/" className="text-reset">Tradingview</a>
                        </li>

                        <li>
                            <a href="https://www.coingecko.com/es" className="text-reset">Coingecko</a>
                        </li>

                    </ul>

                    <ul className="col-3 list-unstyled">
                        <li className="font-weight-bold text-uppercase">quick</li>
                        <li><Link to="/" className="navbar-brand footerLinks text-reset ">Home</Link></li>
                    </ul>

                    <ul className="col-3 list-unstyled">

                        <Row>
                            <li className="d-flex justify-content-between">
                                <a href="https://www.instagram.com/" className="text-reset">
                                <FontAwesomeIcon icon={faInstagram} />
                                </a>

                                <a href="https://twitter.com/home" className="text-reset">
                                <FontAwesomeIcon icon={faTwitter} />
                                </a>

                                <a href="" className="text-reset">
                                <FontAwesomeIcon icon={faTelegram} />
                                </a>

                                <a href="https://github.com/biggmomah/react_rodrigo" className="text-reset">
                                <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>
                        </Row>
                    </ul>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer