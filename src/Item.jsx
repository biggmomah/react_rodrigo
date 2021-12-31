import React from "react"

function Item({personajes}){  
    return(
        <div className="row">
        {
            personajes.map((item, index)=>(
                <div key={index} className="col">
                    <div className="card">
                        <img src={item.image} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">
                                {item.name}
                            </h5>
                            <p>{item.species}</p>
                        </div>
                    </div>
                </div>
                
            ))
        }
       
    </div>
    
    )
}

export default Item