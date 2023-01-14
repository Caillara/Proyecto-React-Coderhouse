import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";


const NavBar = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-dark bgNav">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}><img src={"img/iconos/LogoProeza.png"} alt={"Logo"} className="logo"/></Link>
                        <Link to={"/"} className="text-decoration-none"><h1>ProezaSport</h1></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse nav" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link"  to={"/"}>Inicio</NavLink>
                                </li>
                                <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</Link>
                                    <ul class="dropdown-menu">
                                        <li><Link class="dropdown-item" to={"/Productos"}>Todos</Link></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><Link class="dropdown-item text-decoration-none" to={"/Productos/category/blanco"}>Blanco</Link></li>
                                        <li><Link class="dropdown-item text-decoration-none" to={"/Productos/category/negro"}>Negro</Link></li>
                                        <li><Link class="dropdown-item text-decoration-none" to={"/Productos/category/beige"}>Beige</Link></li>
                                        <li><Link class="dropdown-item text-decoration-none" to={"/Productos/category/azul"}>Azul</Link></li>
                                        <li><Link class="dropdown-item text-decoration-none" to={"/Productos/category/bordo"}>Bordo</Link></li>
                                        <li><Link class="dropdown-item text-decoration-none" to={"/Productos/category/celeste"}>Celeste</Link></li>
                                        <li><Link class="dropdown-item text-decoration-none" to={"/Productos/category/gris"}>Gris</Link></li>
                                        <li><Link class="dropdown-item text-decoration-none" to={"/Productos/category/marron"}>Marron</Link></li>
                                        <li><Link class="dropdown-item text-decoration-none" to={"/Productos/category/verde"}>Verde</Link></li>
                                        <li><Link class="dropdown-item text-decoration-none" to={"/Productos/category/naranja"}>Naranja</Link></li>
                                        <li><Link class="dropdown-item text-decoration-none" to={"/Productos/category/amarilla"}>Amarilla</Link></li>

                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link"  to={"/nosotros"}>Nosotros</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link"  to={"/ayuda"}>Ayuda</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link"  to={"/contacto"}>Contacto</NavLink>
                                </li>
                            </ul>
                            <NavLink to={"/cart"}>
                                <CartWidget/>
                            </NavLink>
                        </div>
                    </div>  
                </nav>
            </div>
        </div>
    );
}

export default NavBar;