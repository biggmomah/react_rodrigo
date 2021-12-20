import {useState} from 'react';

function ItemCount({ stock , initial , onAdd }){
    
    const [contador, setContador]=useState(0)

    const aumentadorContador=()=>{
        setContador(contador +1)
        console.log('aumenta')
    }

    const disminuirContador=()=>{
        setContador(contador -1)
    }

    const resetearContador=()=>{
        setContador(0)
    }

    return(
        <div>
            <button type="button" onCLick={aumentadorContador} className="btn btn-outline-primary btn-sm">Agregar</button>
            <button type="button" onCLick={disminuirContador} className="btn btn-outline-secondary btn-sm">Restar</button>
            <button type="button" onCLick={resetearContador} className="btn btn-danger btn-sm">Reiniciar</button>
            <p>Contador actual: {contador}</p>
        </div>
    )
}

export default ItemCount 