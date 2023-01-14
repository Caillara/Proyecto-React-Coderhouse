import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="col-md-12">
            <div className="logoWspFlotante">
                <Link to={"https://wa.me/541137718896"} target="_blank"><img className="iconoFlotante" src="./img/Iconos/WhatsappVerde.svg" alt="Logo whatsapp"/></Link>
            </div>  
            <div className="contenido">
                <div className="divFooter">
                    <h4>Servicios</h4>
                    <Link to={"#"}>Devoluciones</Link>
                    <Link to={"#"}>Ventas por mayor</Link>
                    <Link to={"#"}>Metodos de pago</Link>
                    <Link to={"#"}>Preguntas frecuentes</Link>
                </div>
                <div className="divFooter compañia">
                    <h4>Compañia</h4>
                    <Link href={"/inicio"}>Novedades</Link>
                    <Link href={"/nosotros"}>Acerca de</Link>
                    <Link href={"/tienda"}>Productos</Link>
                    <Link href={"/contacto"}>Contactos</Link>              
                </div>
                <div className="divFooter">
                    <h4>Redes Sociales</h4>
                    <Link href={"https://www.facebook.com/profile.php?id=100006744035530"}>Facebook</Link>
                    <Link href={"#"}>Twitter</Link>
                    <Link href={"https://www.instagram.com/fedecaillara/"}>Instagram</Link>
                </div>
            </div>
            <div className="copyright">
                <p>Todos los derechos reservados &copy; 2022 <span>Federico Caillara</span></p>
            </div>
        </footer>
    )
}

export default Footer;