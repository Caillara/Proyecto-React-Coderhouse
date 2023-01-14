import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Productos from "./Json/Productos.json"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const promise = new Promise((resolve) => {
        
            resolve(Productos.find(item => item.id === parseInt(id)))
        })

        promise.then((data) => {
            setItem(data)
        })

    }, [id])

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )

}

export default ItemDetailContainer;