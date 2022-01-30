import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
function Item({producto}){  
    const {name, precio, imagen, id} = producto
    return(
        <Col className='col-md-4'>
        <Card>

            <Container style={{width:'200px', height:'200px'}}>
                <img src={imagen} alt=""style={{ width: '100%' }} />
            </Container>
            
            <Card.Body>
                <Card.Title className="card-tittle text-center">{name}</Card.Title>
                <p className="text-center">${precio}</p>
                <Link to={"/producto/"+id}>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md="auto"><Button variant="outline-primary">Ver mas</Button></Col>
                        </Row>
                    </Container>
                </Link>
            </Card.Body>
        </Card>
        </Col>
    )
}




export default Item