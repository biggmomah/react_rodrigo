import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
function Item({producto}){  
    const {name, precio, imagen, id} = producto
    return(
        <Col   xs={6} md={4}>
        <Card className="cardContainer">
            
            <Card.Body>
            <Container style={{width:'200px', height:'200px'}}>
                <img src={imagen} alt="" className="imgCard"/>
            </Container>
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