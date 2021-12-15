function ItemListCointainer({titulo}){

     const{nombre, precio} = titulo
     
    return(
        <h3>{nombre}
            <p>{precio}</p>
        </h3>
    )
}

export default ItemListCointainer