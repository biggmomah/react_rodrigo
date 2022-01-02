
function Item({personaje}){  
    
    const {name, species, image} = personaje
    return(
        <div className="card" style={{width:'10%'}}>
            <img src={image} alt="" style={{width: '80px', height:'80px'}} />
            <div className="card-body">
                <h5 className="card-tittle">{name}</h5>
                <p>{species}</p>
            </div>
        </div>
    )
}

export default Item