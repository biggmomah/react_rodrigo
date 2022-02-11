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
    <div className="containerDetail">
    <div className="itemDetail">
      <div className="imageContainer">
        <img src={imagen} alt="" />
      </div>
      <h4>{name}</h4>
      <p> Precio: ${precio}</p>
      <ItemCount initial={1} producto={producto} onAdd={onAdd} />

      <button 
        onClick={() => addToCart(item)}
        className=" text-center btn btn-outline-dark"
      >
        Confirmar
      </button>
    </div>
  </div>
  );
}

export default ItemDetail; 