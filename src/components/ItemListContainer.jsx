import { collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Productos from "./Json/Productos.json"

const ItemListContainer = () => {
    const[items, setItems] = useState([])
    const {id} = useParams()

    /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? Productos.filter(item => item.categoria === id) : Productos)
            })
        })
        promesa.then((data) => {
            setItems(data)
        })
    }, [id]);
 */

// Insertar productos del JSON al firebase

    /* useEffect(() => {
        const db = getFirestore()
        const itemColletion = collection(db, "Items")
        Productos.forEach((item) => {
            addDoc(itemColletion, item)
        })

    }, []) */

// Traer los productos del firebase

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "Items")
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id,...doc.data()})))
        })
    }, [id])

    return (
        <div className="container py-5">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;