import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn position-relative ms-3">
            <img src="img/iconos/carrito1.png" alt="" width={40}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CartWidget;