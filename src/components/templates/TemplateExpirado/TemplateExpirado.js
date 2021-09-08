import React from 'react'
import Title from '../../atom/Title/Title'
import Link from 'next/link'
import Navbar from '../../molecule/Navbar/Navbar'
import Footer from '../../organism/Footer/Footer'
import Paragraph from '../../atom/Paragraph/Paragraph'

function TemplateExpirado() {
    return (
        <>
            <Navbar />
            <section className="bg-know-how bg-start bg-cover tm:py-38 md:py-136 h-full grid grid-cols-1">
                <div className="tm:container mx-auto grid md:grid-cols-2 tm:grid-cols-1 px-15 place-content-center items-center">
                    <div className="md:order-1 tm:order-2">
                        <img src="/img/robo-estilo.png" alt="Phantom by Paco Rabanne" className="self-center mx-auto" />
                    </div>
                    <div className="md:order-2 tm:order-1">
                        <div className="grid grid-cols-1 gap-22">
                            <div>
                                <Title titulo="Que pena :( Este link está expirado. " extraclass="text-black text-center py-38" />
                                <Paragraph paragrafo="O link que você tentou acessar já foi utilizado." extraclass="text-black text-center"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            </>
    )
}

export default TemplateExpirado
