import React from "react"

function ItemDetail({personaje}){
    const {name, species, image, gender } = personaje
    return(
        <div className="card" style={{width:'10%'}}>
            <img src={image} alt="" style={{width: '80px', height:'80px'}} />
            <div className="card-body">
                <h5 className="card-tittle">{name}</h5>
                <p>{species}</p>
                <p>{gender}</p>
            </div>
        </div>
    )
}

export default ItemDetail