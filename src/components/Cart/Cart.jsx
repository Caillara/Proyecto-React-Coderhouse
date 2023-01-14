import React from "react";
import { useCartContext } from "../context/CartContext";

function Cart () {
    const {cart, removeProduct} = useCartContext();

    return (     
        <div>
                {cart.map(product => 
                <div>
                    <img src={product.img} alt={product.nombre} />
                    <div>
                        <p>Titulo: {product.nombre}</p>
                        <p>Cantidad: {product.quantity}</p>
                        <p>Precio: {product.precio}</p>
                        <p>Subtotal: ${product.quantity * product.precio}</p>
                        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
                    </div>
                </div>)}
        
        </div>  
    )
}

export default Cart;