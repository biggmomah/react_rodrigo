
function Item(){

    /* const cardStyle= {
        width: '18rem'
    } */
    return(
    <div className='col'>
       <div className="card cardStyle" style={{width:'18rem'}}>
            <img src="/img/123.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text text-center">Card prueba</p>
            </div>
        </div>
    </div>
    
    )
}

export default Item