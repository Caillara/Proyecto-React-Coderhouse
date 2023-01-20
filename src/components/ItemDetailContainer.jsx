import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
/* import Productos from "./Json/Productos.json" */
import { doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id} = useParams()

    /* useEffect(() => {
        const promise = new Promise((resolve) => {
        
            resolve(Productos.find(item => item.id === parseInt(id)))
        })

        promise.then((data) => {
            setItem(data)
        })

    }, [id]) */

    useEffect(() => {
        const db = getFirestore()
        const document = doc(db, "Items", id)
        getDoc(document).then((snapShot) => {   
            setItem({id:snapShot.id, ...snapShot.data()})
        })
    }, []) 

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )

}

export default ItemDetailContainer;