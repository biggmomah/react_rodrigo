
function Item({producto}){

   const {id, nombre, stock} = producto
    
    return(
    <div className='col'>
       <div className="card cardStyle" style={{width:'18rem'}}>
            <img src="/img/123.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3>Nombre:{nombre}</h3>
                <p className="card-text text-center">ID: {id}</p>
                <p>Cantidad: {stock}</p>
            
            </div>
        </div>
    </div>
    
    )
}

export default Item