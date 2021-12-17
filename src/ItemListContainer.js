function ItemListCointainer({titulo}){
    let contador= 0

    const aumentadorContador=()=>{
        console.log('aumentado')
        contador++
        console.log(contador)
    }
    const{nombre, precio} = titulo
     
    return(
        <div>
            <h3>{nombre}
                <p>{precio}</p>
            </h3>

            <div>
                <p>Contador actual: {contador}</p>
                <button onClick={aumentadorContador}>aumentar</button>
            </div>
        </div>

        
    )
}

export default ItemListCointainer