import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return (
        <button type="button" className="btn position-relative ms-3">
            <img src="img/iconos/carrito1.png" alt="" width={40}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </button>
    )
}

export default CartWidget;