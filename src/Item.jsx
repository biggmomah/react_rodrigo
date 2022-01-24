import { Link } from "react-router-dom"

function Item({producto}){  
    const {name, precio, imagen, id} = producto
    return(
        <div className="card" style={{width:'10%'}}>
            <img src={imagen} alt="" style={{width: '80px', height:'80px'}} />
            <div className="card-body">
                <h5 className="card-tittle">{name}</h5>
                <p>{precio}</p>
                <Link to={"/personaje/"+id}>ver mas </Link>
            </div>
        </div>
    )
}

export default Item