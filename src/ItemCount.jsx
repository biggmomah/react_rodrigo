import {useEffect, useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ItemCount= ({ producto , initial , onAdd }) => {

    const {stock} = producto;

    const [contador, setContador]=useState(initial)

    const aumentarContador=()=>{
        if ( contador <= stock){
            setContador(contador +1)
        }console.log('+1')
    }

    const disminuirContador=()=>{   
        if(contador > initial){
            setContador(contador -1)
        }console.log('-1')
    }

    const resetearContador=()=>{
        setContador(initial)
        console.log('reiniciado')
    }

    useEffect(() =>{
      onAdd(contador)
    } )




    return(
        <Row className='justify-content-md-center'>
            <Col>
                <Button type="button" onClick={aumentarContador} variant="outline-success">+</Button>
            </Col>
            <Col>
            <p className='text-center'>Cantidad : {contador}</p>
            </Col>

            <Col>
                <Button type="button" onClick={disminuirContador} variant='outline-danger' >-</Button>
            </Col>

                <Button type="button" onClick={resetearContador} variant='outline-primary'>Reiniciar</Button>

        </Row>
    )
}

export default ItemCount 