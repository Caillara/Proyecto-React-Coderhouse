import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div>
            <h2 className="text-center mb-4">Nuestros productos</h2>
            <div className="row">
            {
                items.map(item => 
                    <div className="col-md-3" key={item.id}>
                        <Item item={item}/>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default ItemList;