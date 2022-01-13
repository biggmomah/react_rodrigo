import Item from './Item'




function ItemList({personajes}){

    return(

        <div className="container">
            <div className="row justify-content-between">
                {personajes.map((personaje)=>
                <Item key={personaje.id} personaje={personaje} />)
                }   
            </div>
        </div>

   )
}

export default ItemList