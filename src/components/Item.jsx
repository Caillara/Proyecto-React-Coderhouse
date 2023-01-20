import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
            <div className="section-card">
                <div className="card">
                <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                    <img src={item.img} className="card-img-top" alt={item.nombre} />
                </Link>
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">${item.precio}</p>
                        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                            <button class="btn btn-dark">Ver Producto</button>
                        </Link>
                    </div>
                </div>
            </div>
            
        
    )
}

export default Item;