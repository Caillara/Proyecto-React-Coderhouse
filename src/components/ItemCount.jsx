import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const[counter, setCounter] = useState(1);
    const[itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false)

    const sumarStock = () => {
        if (counter < itemStock) {
            setCounter(counter + 1);
        }
    }

    const restarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const addToCart = (quantity) => {
        setItemStock(itemStock - quantity)
        setCounter(1)
        setVendido(true)
        onAdd(quantity)
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    return (
        <div className="container text-center"> 
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn bg-counter" onClick={restarStock}>-</button>
                        <button type="button" className="btn bg-counter">{counter}</button>
                        <button type="button" className="btn bg-counter" onClick={sumarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {vendido ? <Link to={"/cart"} className="btn btn-dark">Terminar Compra</Link> :<button type="button" className="btn btn-primary" onClick={() => {addToCart(counter)}}>Agregar al carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount; 