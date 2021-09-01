import React, { useState } from 'react'

const Smartphone = () => {
    const [abrir, setAbrir] = useState(false)

    function abrirSpeaker() {
        setAbrir(true)
    }
    function abrirSmart() {
        setAbrir(!true)
    }

    return (
        <section className="bg-white p-26 rounded-medium mt-31">
            <div className="grid grid-cols-2 gap-15 mb-38">
                <button className={`text-13 md:text-18 p-13 md:p-22 rounded-medium ${abrir ? 'bg-black text-white' : 'bg-grey-100 text-grey-200'}`} onClick={abrirSpeaker}>
                    GOOGLE ASSISTENTE
                </button>
                <button className={`text-13 md:text-18 p-13 md:p-22 rounded-medium ${!abrir ? 'bg-black text-white' : 'bg-grey-100 text-grey-200'}`} onClick={abrirSmart}>
                    AMAZON ALEXA
                </button>
            </div>
            {abrir ?
                <article>
                    GOOGLE ASSISTENTE
                    <div className="py-15 grid-col-50-100">
                        <div className="bg-black text-white rounded-medium text-center text-26 w-45 h-45 flex justify-center">
                            <span>1</span>
                        </div>
                        <div className="ml-10">
                            <p className="text-15 md:text-18 text-black">Com o smart speaker ligado, basta dizer a seguinte frase de invocação para ser atendido:</p>
                            <p className="text-purple bg-purple-200 p-10 rounded mt-15 text-15 md:text-18">Ok, Google. Falar com Experimentador.</p>
                        </div>
                    </div>
                    <div className="py-15 grid-col-50-100">
                        <div className="bg-black text-white rounded-medium text-center text-26 w-45 h-45 flex justify-center">
                            <span>2</span>
                        </div>
                        <div className="ml-10">
                            <p className="text-15 md:text-18 text-black">Com o smart speaker ligado, basta dizer a seguinte frase de invocação para ser atendido:</p>
                            <p className="text-purple bg-purple-200 p-10 rounded mt-15 text-15 md:text-18">Ok, Google. Falar com Experimentador.</p>
                        </div>
                    </div>
                    <div className="py-15 grid-col-50-100">
                        <div className="bg-black text-white rounded-medium text-center text-26 w-45 h-45 flex justify-center">
                            <span>3</span>
                        </div>
                        <div className="ml-10">
                            <p className="text-15 md:text-18 text-black">Com o smart speaker ligado, basta dizer a seguinte frase de invocação para ser atendido:</p>
                            <p className="text-purple bg-purple-200 p-10 rounded mt-15 text-15 md:text-18">Ok, Google. Falar com Experimentador.</p>
                        </div>
                    </div>
                </article>
                :
                <article>
                    AMAZON ALEXA
                    <div className="py-15 grid-col-50-100">
                        <div className="bg-black text-white rounded-medium text-center text-26 w-45 h-45 flex justify-center">
                            <span>1</span>
                        </div>
                        <div className="ml-10">
                            <p className="text-15 md:text-18 text-black">Com o smart speaker ligado, basta dizer a seguinte frase de invocação para ser atendido:</p>
                            <p className="text-purple bg-purple-200 p-10 rounded mt-15 text-15 md:text-18">Ok, Google. Falar com Experimentador.</p>
                        </div>
                    </div>
                    <div className="py-15 grid-col-50-100">
                        <div className="bg-black text-white rounded-medium text-center text-26 w-45 h-45 flex justify-center">
                            <span>2</span>
                        </div>
                        <div className="ml-10">
                            <p className="text-15 md:text-18 text-black">Com o smart speaker ligado, basta dizer a seguinte frase de invocação para ser atendido:</p>
                            <p className="text-purple bg-purple-200 p-10 rounded mt-15 text-15 md:text-18">Ok, Google. Falar com Experimentador.</p>
                        </div>
                    </div>
                    <div className="py-15 grid-col-50-100">
                        <div className="bg-black text-white rounded-medium text-center text-26 w-45 h-45 flex justify-center">
                            <span>3</span>
                        </div>
                        <div className="ml-10">
                            <p className="text-15 md:text-18 text-black">Com o smart speaker ligado, basta dizer a seguinte frase de invocação para ser atendido:</p>
                            <p className="text-purple bg-purple-200 p-10 rounded mt-15 text-15 md:text-18">Ok, Google. Falar com Experimentador.</p>
                        </div>
                    </div>
                </article>
            }
        </section>
    )
}

export default Smartphone
