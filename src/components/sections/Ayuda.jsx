import React from "react";

const Ayuda = () => {
    return (
        <div>
            <h2 className="headingDos h2Ayuda">Mesa de ayuda</h2>
            <section className="sectionAyuda">
                <article className="articleAyuda" id="servicios">
                    <h3 className="headingTres">Servicios</h3>
                    <p>Buscamos tener el mejor servicio tanto de manera online como presencial para la mayor comodidad posible de nuestros clientes.</p>
                </article> 
                <article className="articleAyuda" id="devoluciones">
                    <h3 className="headingTres">Devoluciones</h3>
                    <p>Nuestro objetivo es que todos nuestros clientes tengan la mejor experiencia de compra online. Si no estas conforme con nuestro producto, podes realizar el cambio con alguna de estas formas:</p>
                    <ul>
                        <li>En cualquiera de nuestras tiendas de primera, por un producto del mismo valor durante los 30 dias siguientes a tu compra y con el comprobantes de la operacion realizada.</li>
                        <li>Las devoluciones sin cargo solo pueden ser realizadas durante los 15 dias siguiente a la compra.</li>
                    </ul>
                </article>
                <article className="articleAyuda" id="ventas-por-mayor">
                    <h3 className="headingTres">Pedidos al por mayor</h3>
                    <p>Para pedidos por mayor comuniquese al: 0800-000-000</p>
                </article>
                <article className="articleAyuda" id="metodos-de-pago">
                    <h3 className="headingTres">Metodos de pago</h3>
                    <ul>
                        <li>Tarjetas de credito/debito</li>
                        <li>MercadoPago</li>
                        <li>Paypal</li>
                        <li>Efectivo</li>
                    </ul>
                </article>
            </section>
            <section className="sectionAyuda FQ">
                <h3 className="headingTres headingFQ">Preguntas frecuentes</h3>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                ¿Cual es el costo de envio?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>El costo de envio sera mostrado en base al total de la compra y ubicacion, en el checkout, al momento previo de la compra.</p>
                            </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                ¿Como son los envios?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Trabajamos con envios con Correo argentino y a combinar con otros. </p>
                            </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                ¿Cuanto tarda en llegar el pedido?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Dependiendo de la zona y el correo, tratamos de no mas de 72hs.</p>
                            </div>
                        </div>
                        </div>
                    </div>   
            </section>  
        </div>
    )
}

export default Ayuda;