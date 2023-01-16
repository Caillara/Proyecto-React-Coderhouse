import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

export const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity)
    }

    return (
        <div className="row container-detail">
            <div className="col-md-4 detail">
                <h5>{item.nombre}</h5>
                <img src={item.img} width={300} alt={item.nombre} />
                <p>${item.precio}</p>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;