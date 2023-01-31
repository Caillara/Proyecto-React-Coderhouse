import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


function Cart () {
    const {cart, removeItem, clear, sumTotal} = useContext(CartContext)

    return (     
        <div className="container">
            <h2 className="titulo-cart">Carrito de Compras</h2>
            <div className="row">
                <div className="col-md-12 container-table">
                    <table class="table">
                        <thead>
                            <tr>
                                <th><Link onClick={clear} className="btn btn-dark">Vaciar carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col" className="text-center">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio/unidad</th>
                                <th scope="col" className="text-center">SubTotal</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(prod => (
                                <tr key={prod.id}>
                                    <td><img src={prod.img} alt={prod.nombre} width={64}/></td>
                                    <td className="text-center align-middle">{prod.nombre}</td>
                                    <td className="text-center align-middle">{prod.quantity}</td>
                                    <td className="text-center align-middle">$ {prod.precio}</td>
                                    <td className="text-center align-middle">$ {prod.quantity * prod.precio}</td>
                                    <td className="text-end align-middle"><Link onClick={() => {removeItem(prod.id)}}><img src={"img/iconos/eliminar1.svg"} alt={"eliminar"} width={35}/></Link></td>
                                </tr>
                            ))}

                            <tr className="sumTotal-cart"> 
                                <td><b>Total:</b> ${sumTotal()}</td>
                            </tr>
                            <tr className="vaciar-cart"> 
                                <td><Link to={"/checkout"} className="btn btn-dark">Finalizar compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>  
    )
}

export default Cart;