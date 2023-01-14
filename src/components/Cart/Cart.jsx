import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart () {
    const {cart, removeProduct} = useContext(CartContext)

    return (     
        <div>

            <table class="table">
            <thead>
                <tr>
                <th scope="col">&nbsp;</th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(item => (
                    <tr>
                        <td><img src={item.img} alt={item.nombre} width={32}/></td>
                        <td>{item.nombre}</td>
                        <td>{item.quantity}</td>
                        <td>{item.quantity * item.precio}</td>
                        <td><Link onClick={() => {removeProduct(item.id)}} >X</Link></td>
                    </tr>

                ))}
            </tbody>
            </table>
            
        </div>  
    )
}

export default Cart;