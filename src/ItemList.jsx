import Item from './Item'




function ItemList({productos}){

    return(

        <div className="container">
            <div className="row justify-content-between">
                {productos.map((producto)=>
                <Item key={producto.id} producto={producto} />)
                }   
            </div>
        </div>

   )
}

export default ItemList