import React from "react";

const Nosotros = () => {
    return (
        <div className="contenedorNosotros">
            <section className="sectionNosotros">
                <h2>Acerca de nosotros</h2>
                <p>Somos ProezaSport, fabricantes de ropa de primer nivel, con una amplia gama de variedades y una marcada responsabilidad social y empresarial. A lo largo de estos años nuestro objetivo siempre fue el mismo, brindar el mejor servicio y atencion a nuestros clientes de manera presencial. Y ahora, que nos encontras en nuestra tienda online podremos darle la comodidad que tanto buscaba; viendo, consultando y comprando, todo desde su casa.</p>
                <p>Si te interesaria saber mas sobre nosotros, no dudes en seguirnos!</p>
                <a className="btn btn-dark btn-sm" href="https://www.instagram.com/fedecaillara/" role="button">Seguir</a>
            </section>
            <div className="imgNosotros">
                <img className="imgPersona" src="../img/hombreCaminando.jpg" target="_blank" alt="Hombre caminando"/>
            </div>
        </div>
    )
}

export default Nosotros;