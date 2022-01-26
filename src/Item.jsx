import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function Item({producto}){  
    const {name, precio, imagen, id} = producto
    return(
        <Col className='col-md-4'>
        <Card>
            <Card.Img src={imagen} alt=""style={{ width: '18rem' }} />
            <Card.Body>
                <Card.Title className="card-tittle">{name}</Card.Title>
                <p>{precio}</p>
                <Link to={"/personaje/"+id}>
                    <Button variant="outline-primary" className="mx-auto">Ver mas</Button>
                </Link>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default Item