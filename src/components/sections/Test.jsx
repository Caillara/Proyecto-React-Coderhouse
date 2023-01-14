import React from "react";

const Test = () => {
    return (
        <section className="contenedor">
            <h2 className="headingDos headingTest">¿Que dicen nuestros clientes?</h2>
            <article className="sectionTestimonios test1">
                <div className="divTestimonios" data-aos="fade-up">
                    <img className="fotoDePerfil" src="./img/Iconos/Perfil.png" alt="Foto de perfil"/>
                    <h3 className="headingTresTest">Luz D. Saldaña</h3>
                    <p>La verdad es que estoy contenta por que la atención telefónica que ofrecen esta genial,el servicio es rápido y eficaz.</p>
                </div>
            </article>
            <article className="sectionTestimonios test2">
                <div className="divTestimonios" data-aos="fade-up">
                    <img className="fotoDePerfil" src="./img/Iconos/Perfil.png" alt="Foto de perfil"/>
                    <h3 className="headingTresTest">Rosangela L.</h3>
                    <p>El tiempo del envio fue de 24 hrs, genial! Y la presentación y el personal de entrega A1. Y bueno la calidad fue lo mejor.</p>
                </div>
            </article>
            <article className="sectionTestimonios test3">
                <div className="divTestimonios" data-aos="fade-up">
                    <img className="fotoDePerfil" src="./img/Iconos/Perfil.png" alt="Foto de perfil"/>
                    <h3 className="headingTresTest">Jorge Guarin</h3>
                    <p>Compré el combo de tres camisetas,aparte q salen más económicas son de excelente calidad el estampado es muy bueno, me gustaron mucho</p>
                </div>
            </article>    
        </section>
    )
}

export default Test;