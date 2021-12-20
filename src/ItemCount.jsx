import {useState} from 'react';

const ItemCount= ({ stock , initial , onAdd }) => {
    
    const [contador, setContador]=useState(initial)
    const aumentarContador=()=>{
        if ( contador <= stock){
            setContador(contador +1)
        }console.log('excediste cantidad stock')
    }

    const disminuirContador=()=>{   
        if(contador > initial){
            setContador(contador -1)
        }console.log('no es posible seguir restando unidades')
    }

    const resetearContador=()=>{
        setContador(initial)
        console.log('reiniciado')
    }

    return(
        <div>
            <button type="button" onClick={aumentarContador} className="btn btn-outline-primary btn-sm">Agregar</button>
            <button type="button" onClick={disminuirContador} className="btn btn-outline-secondary btn-sm">Restar</button>
            <button type="button" onClick={resetearContador} className="btn btn-danger btn-sm">Reiniciar</button>
            <p>Contador actual: {contador}</p>
        </div>
    )
}

export default ItemCount 