import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Productos from "./Json/Productos.json"

const ItemListContainer = () => {
    const[items, setItems] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? Productos.filter(item => item.categoria === id) : Productos)
            })
        })
        promesa.then((data) => {
            setItems(data)
        })
    }, [id]);

    return (
        <div className="container py-5">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;