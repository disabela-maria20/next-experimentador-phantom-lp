import Paragraph from "../../atom/Paragraph/Paragraph";
import Title from "../../atom/Title/Title";
import React, { useState } from 'react'
import Speaker from "../../molecule/Speaker/Speaker";
import Smartphone from "../../molecule/Smartphone/Smartphone";


function KnowHow() {
    const [abrir, setAbrir] = useState(true)

    function abrirSpeaker() {
        setAbrir(true)
    }
    function abrirSmart() {
        setAbrir(!true)
    }

    return (
        <>
            <section className="bg-know-how bg-start bg-cover tm:py-38 md:py-136 h-full grid grid-cols-1">
                <div className="tm:container mx-auto grid grid-cols-1 px-15 md:grid-cols-2 md:gap-95 tm:gap-38">
                    <div className="order-1 md:order-2">

                        <img src="/img/robo-estilo.png" alt="Phantom by Paco Rabanne" className="md:w-auto tm:w-3/6 mx-auto tm:pb-18" />
                    </div>
                    <div className="order-1 md:order-2">
                    <Title titulo="Peça já uma amostra" extraclass="text-black" />
                        <Paragraph paragrafo="Para pedir sua amostra, basta utilizar o Google Assistant ou Amazon Alexa, escutar a experiência e, pronto! Sua amostra chegará para você em alguns dias.  Mas se não souber pedir, siga os passos abaixo, é fácil!" extraclass="text-black py-38" />
                    <h4 className="font-bold tm:text-18 md:text-26 leading-title text-center uppercase mb-26">Selecione o seu dispositivo abaixo</h4>
                        <article>
                            <div className="grid grid-cols-2 gap-15 mb-38">
                                <button className={`bg-white transition-opacity p-10 md:p-22 rounded-medium max-w-55 ${abrir ? 'ring-2 ring-black shadow-xl font-bold' : 'ring-2 ring-grey-200 shadow-xl'}`} id="speaker" onClick={abrirSpeaker} >
                                    <div className={`${abrir ? 'opacity-100' : ''}`}>
                                        <img src="/img/icon-perfume.png" className={`block m-auto ${abrir ? 'opacity-100' : 'opacity-80'}`} />
                                        <h5 className={`text-15 md:text-18 pt-13 ${abrir ? 'opacity-100' : 'opacity-80'}`}>SMART SPEAKER</h5>
                                        <p className={`text-10 pt-6 ${abrir ? 'opacity-100' : 'opacity-80'}`}>ALEXA ECHO DOT, ALEXA SHOW OU GOOGLE NEST MINI</p>
                                    </div>
                                </button>
                                <button className={`bg-white transition-opacity p-10 md:p-22 rounded-medium max-w-55 ${!abrir ? 'ring-2 ring-black shadow-xl font-bold' : 'ring-2 ring-grey-200 shadow-xl'}`} id="smart" onClick={abrirSmart}>
                                    <div className={`${!abrir ? 'opacity-100' : ''}`} >
                                        <img src="/img/icon-phone.png" className={`block m-auto ${!abrir ? 'opacity-100' : 'opacity-80'}`} />
                                        <h5 className={`text-15 md:text-18 pt-13 ${!abrir ? 'opacity-100' : 'opacity-80'}`}>SMARTPHONE</h5>
                                        <p className={`text-10 pt-6 ${!abrir ? 'opacity-100' : 'opacity-80'}`}>APLICATIVOS ALEXA OU <br /> GOOGLE ASSISTENTE</p>
                                    </div>
                                </button>
                            </div>
                            {abrir ? <Speaker /> : <Smartphone />}
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default KnowHow
