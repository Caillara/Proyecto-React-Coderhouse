import React from "react";

const Contacto = () => {
    return (
        <div>
            <h2 className="headingDos">Contactanos</h2>
            <section className="sectionContacto llamanos">
                    <p>¿Tienes alguna pregunta? ¡Estamos aquí para ayudarte!</p> 
                    <p>Llámanos al: +54 11 3771-8896 </p>
                    <p>o envíanos un email: <a href="mailto:fedecaillara@gmail.com" rel="noreferrer" target="_blank">fedecaillara@gmail.com</a></p> 
            </section>
            <section className="sectionContacto form">
                    <p>Si quieres informacion sobre cualquiera de nuestros productos o estas interesado en su distribucion, rellena nuestro formulario y nos pondremos en contacto contigo lo antes posible.</p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Nombre:</label>
                        <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="nombre completo" />
                    </div>
                    <div className="mb-3">  
                        <label htmlFor="exampleFormControlInput2" className="form-label">Correo electrónico:</label>  
                        <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="example@gmail.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput3" className="form-label">Consultas:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea3" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark">Enviar</button>
                </form>
            </section>
            <section className="sectionContacto horarios">
                <div data-aos="flip-up">
                    <h3 className="h3Contacto">Horarios</h3>
                    <p>Lunes a viernes: 11:00 - 19:00</p>
                    <p>Sabados: 11:00 - 17:00</p>
                    <p>Domingos: 12:30 - 16:30</p>
                </div>
                <div data-aos="flip-down">
                    <h3 className="h3Contacto">Tiendas</h3>
                    <p>San Martin, Buenos Aires</p>
                    <p>Capital federal, Buenos Aires</p>
                </div>
            </section>
        </div>
    )
}

export default Contacto;