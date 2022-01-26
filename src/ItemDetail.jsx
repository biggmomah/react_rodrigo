import React from "react";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "./Context";

function ItemDetail({ producto, id }) {
  const { name, precio, imagen } = producto;
  const { addToCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState();

  const item = {
    producto: producto,
    cantidad: +cantidad,
    id: id,
  };

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
  };

  return (
    <div className="card" style={{ width: "10%" }}>
      <img src={imagen} alt="" style={{ width: "80px", height: "80px" }} />
      <div className="card-body">
        <h5 className="card-tittle">{name}</h5>
        <p>{precio}</p>
        <ItemCount initial={1} stock={100} onAdd={onAdd} />
        <button onClick={() => addToCart(item)}>Confirmar</button>
      </div>
     
    </div>

  );
}

export default ItemDetail;