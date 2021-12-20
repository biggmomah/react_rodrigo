// Los hooks ('useState') no pueden incluirse en condiconales, el primer valor si no es asignado se toma como undefined,

function ItemListCointainer({titulo}){


    const{nombre, precio} = titulo


    
    return(
        <div>
            <h3>{nombre}
                <p>{precio}</p>
            </h3>
        </div>

        
    )
}

export default ItemListCointainer