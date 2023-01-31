import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {addDoc, collection, getFirestore, updateDoc, doc} from "firebase/firestore"

function Checkout () {
    const {cart, sumTotal} = useContext(CartContext)
    const {nombre, setNombre} = useState("")
    const {email, setEmail} = useState("")
    const {orderId, setOrderId} = useState("")

    const generarOrden = () => {
        const order = {
            buyer: {name:nombre, email: email},
            items: cart.map(item => ({id: item.id, name: item.nombre, price: item.precio, quantity: item.quantity, price_total: item.quantity * item.precio})),
            total: sumTotal()
        }

        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id)
            const orderDoc = doc(db, "orders", snapShot.id)
            updateDoc(orderDoc, {total: order.total * 0.9})
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form className="form-orden">
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" id="nombre" placeholder="nombre completo" onInput={(e) => {setNombre(e.target.value)}}/>
                        </div>
                        <div className="mb-3">  
                            <label for="email" className="form-label">Email</label>  
                            <input type="text" className="form-control" id="email" placeholder="example@gmail.com" onInput={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <button onClick={generarOrden} type="submit" className="btn btn-dark">Enviar orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(prod => (
                                <tr key={prod.id}>
                                    <td><img src={prod.img} alt={prod.nombre} width={64}/></td>
                                    <td className="text-center align-middle">{prod.nombre}</td>
                                    <td className="text-center align-middle">{prod.quantity}</td>
                                    <td className="text-center align-middle">$ {prod.quantity * prod.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    { orderId ?
                    <div class="alert alert-light" role="alert">
                        <h3>Ya puedes retirar tu pedido en la tienda!</h3>
                        <p>Tu numero de orden es: {orderId}</p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout