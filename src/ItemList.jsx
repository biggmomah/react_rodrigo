import Row from 'react-bootstrap/Row'
import Item from './Item'

function ItemList({productos}){

    return(
   
        <Row>
            {productos.map((producto)=>
            <Item key={producto.id} producto={producto} />)
            }
        </Row>
     
   )
}

export default ItemList