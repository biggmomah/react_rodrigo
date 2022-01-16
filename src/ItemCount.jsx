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

    const ConfirmarCantidad = () =>{
        console.log(`Confirmando cantidad: ${contador}`)
        onAdd(contador)
    } 


    
     /* // Promise completado sincronico
    const task = new Promise ((resolve, reject) =>{
        resolve(true)
    });
    
    task.then(result=>{
        console.log('fddsffds')
    })
     */

    /*  
    const task = new Promise((resolve, reject)=>{
        reject('mensaje de error')
    })

    task.then(result =>{
        console.log('no es error: ' + result);
    }), err=>{
        console.log('error: ' + err)
    } */
    

    // uso de map
  /*   
    const users=[
        {nombre: 'coder'},
        {nombre:'house'}
    ]

    console.log(users.map(user => user.nombre))

        
    console.log(users.map(user=>user.nombre).join(',')) */

    return(
        <div>
            <button type="button" onClick={aumentarContador} className="btn btn-outline-primary btn-sm">Agregar</button>
            <button type="button" onClick={disminuirContador} className="btn btn-outline-secondary btn-sm">Restar</button>
            <button type="button" onClick={resetearContador} className="btn btn-danger btn-sm">Reiniciar</button>
            <button type="button" onClick={ConfirmarCantidad} className="btn btn-danger btn-sm">Confirmar cantidad</button>

            <p>Contador actual: {contador}</p>
        </div>
    )
}

export default ItemCount 