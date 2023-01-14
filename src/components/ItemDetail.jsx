import React from "react";
import ItemCount from "./ItemCount";

export const ItemDetail = ({item}) => {

    const onAdd = (quantity) => {
        
    }

    return (
        <div className="row container-detail">
            <div className="col-md-4 detail">
                <h5>{item.nombre}</h5>
                <img src={item.img} width={300} alt={item.nombre} />
                <p>${item.precio}</p>
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;