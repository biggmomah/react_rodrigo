// Los hooks ('useState') no pueden incluirse en condiconales, el primer valor si no es asignado se toma como undefined,

function ItemListCointainer({titulo}){


// resultado
//     .then((resultado)=>{
//         const productos = resultado.json()
//         return productos
//     })
//     .then((productos)=>{
//         console.log(productos)
//     })

//     .catch((error)=>{
//         console.log(error)
//     })
//     .finally(()=>{
//         console.log('termino todo el pedido')
//     })

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