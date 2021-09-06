import React, { useState } from 'react'
import Link from 'next/link'

const Smartphone = () => {
    const [abrir, setAbrir] = useState(false)

    function abrirSpeaker() {
        setAbrir(true)
    }
    function abrirSmart() {
        setAbrir(!true)
    }

    return (
        <section className="bg-white p-26 rounded-medium mt-31 mb-38 md:m-auto shadow-xl">
            <div className="grid grid-cols-2 gap-15 mb-38">
                <button className={`font-bold text-13 md:text-18 p-13 md:p-22 rounded-medium ${abrir ? 'bg-black text-white' : 'bg-grey-100 text-grey-200 '}`} onClick={abrirSpeaker}>
                    GOOGLE ASSISTENTE
                </button>
                <button className={`font-bold text-13 md:text-18 p-13 md:p-22 rounded-medium ${!abrir ? 'bg-black text-white' : 'bg-grey-100 text-grey-200'}`} onClick={abrirSmart}>
                    AMAZON ALEXA
                </button>
            </div>
            {abrir ?
                <article>

                    <div className="grid grid-cols-2 gap-18 py-26">
                        <div className="pl-45">
                            <Link href="https://apps.apple.com/us/app/google-assistant/id1220976145">
                                <a target="_blank"><img src="/img/app_store.svg" alt="Download na App Store da Apple" /></a>
                            </Link>
                        </div>
                        <div className="pr-45">
                            <Link href="https://play.google.com/store/apps/details?id=com.google.android.apps.googleassistant&hl=pt_BR&gl=US">
                                <a target="_blank"><img src="/img/google_play.svg" alt="Download na Google Play do Android" /></a>
                            </Link>
                        </div>
                    </div>
                    <div className="py-15 grid-col-50-100">
                        <div className="bg-black text-white font-bold rounded-medium text-center text-26 w-45 h-45 flex justify-center">
                            <span>1</span>
                        </div>
                        <div className="ml-10">
                            <p className="text-15 md:text-18 text-black">Ao baixar o aplicativo, você deverá ter em mãos o e-mail da conta do seu assistente pessoal. Este e-mail é, usualmente, o seu e-mail do Google.</p>
                        </div>
                    </div>
                    <div className="py-15 grid-col-50-100">
                        <div className="bg-black text-white font-bold rounded-medium text-center text-26 w-45 h-45 flex justify-center">
                            <span>2</span>
                        </div>
                        <div className="ml-10">
                            <p className="text-15 md:text-18 text-black">Abra o app, habilite o microfone e diga a seguinte frase de invocação para ser atendido:</p>
                            <p className="text-purple font-bold bg-purple-200 p-15 rounded mt-15 text-15 md:text-18">Ok, Google. Falar com Experimentador.</p>
                        </div>
                    </div>
                    <div className="py-15 grid-col-50-100">
                        <div className="bg-black font-bold text-white rounded-medium text-center text-26 w-45 h-45 flex justify-center">
                            <span>3</span>
                        </div>
                        <div className="ml-10">
                            <p className="text-15 md:text-18 text-black">Para continuar, informe o seu telefone com o DDD: </p>
                            <p className="text-purple font-bold bg-purple-200 p-15 rounded mt-15 text-15 md:text-18">O meu telefone é (21) 9999-9999</p>
                        </div>
                    </div>
                    <div className="py-15 grid-col-50-100">
                        <div className="bg-black font-bold text-white rounded-medium text-center text-26 w-45 h-45 flex justify-center">
                            <span>4</span>
                        </div>
                        <div className="ml-10">
                            <p className="text-15 md:text-18 text-black">Confirme o seu telefone:</p>
                            <p className="text-purple font-bold bg-purple-200 p-15 rounded mt-15 text-15 md:text-18">Sim ou Não</p>
                        </div>
                    </div>
                    <div className="py-15 grid-col-50-100">
                        <div className="bg-black font-bold text-white rounded-medium text-center text-26 w-45 h-45 flex justify-center">
                            <span>5</span>
                        </div>
                        <div className="ml-10">
                            <p className="text-15 md:text-18 text-black">Você receberá um SMS, com um link para finalizar o cadastro e receberá a amostra na sua casa.</p>
                            <p className="text-purple font-bold bg-purple-200 p-15 rounded mt-15 text-15 md:text-18 break-words">[Experimentador] Para continuar seu cadastro visite o link:<br /> <span className=" font-medium break-all text-13">https://experimentador.com.br/pacorabanne/oseutokengerado</span></p>
                        </div>
                    </div>
                </article>
                :
                <article>
                    <div className="grid grid-cols-2 gap-18 py-26">
                        <div className="pl-45">
                            <Link href="https://apps.apple.com/br/app/amazon-alexa/id944011620"><a target="_blank"><img src="/img/app_store.svg" alt="Download na App Store da Apple" /></a></Link>
                        </div>
                        <div className="pr-45">
                            <Link href="https://play.google.com/store/apps/details?id=com.amazon.dee.app&hl=pt_BR&gl=US"><a target="_blank"><img src="/img/google_play.svg" alt="Download na Google Play do Android" /></a></Link>
                        </div>
                    </div>
                    <div className="py-15 grid-col-50-100">
                        <div className="bg-black text-white font-bold rounded-medium text-center text-26 w-45 h-45 flex justify-center">
                            <span>1</span>
                        </div>
                        <div className="ml-10">
                            <p className="text-15 md:text-18 text-black">Ao baixar o aplicativo, você deverá ter em mãos o e-mail da sua conta na Amazon. Se não tiver, é só se cadastrar no aplicativo.</p>
                        </div>
                    </div>
                    <div className="py-15 grid-col-50-100">
                        <div className="bg-black text-white font-bold rounded-medium text-center text-26 w-45 h-45 flex justify-center">
                            <span>2</span>
                        </div>
                        <div className="ml-10">
                            <p className="text-15 md:text-18 text-black">Abra o app, habilite o microfone e diga a seguinte frase de invocação para ser atendido:</p>
                            <p className="text-purple font-bold bg-purple-200 p-15 rounded mt-15 text-15 md:text-18">Alexa. Abrir o Experimentador.</p>
                        </div>
                    </div>
                    <div className="py-15 grid-col-50-100">
                        <div className="bg-black font-bold text-white rounded-medium text-center text-26 w-45 h-45 flex justify-center">
                            <span>3</span>
                        </div>
                        <div className="ml-10">
                            <p className="text-15 md:text-18 text-black">Para continuar, informe o seu telefone com o DDD: </p>
                            <p className="text-purple font-bold bg-purple-200 p-15 rounded mt-15 text-15 md:text-18">O meu telefone é: (21) 9999-9999</p>
                        </div>
                    </div>
                    <div className="py-15 grid-col-50-100">
                        <div className="bg-black font-bold text-white rounded-medium text-center text-26 w-45 h-45 flex justify-center">
                            <span>4</span>
                        </div>
                        <div className="ml-10">
                            <p className="text-15 md:text-18 text-black">Confirme o seu telefone:</p>
                            <p className="text-purple font-bold bg-purple-200 p-15 rounded mt-15 text-15 md:text-18">Sim ou Não</p>
                        </div>
                    </div>
                    <div className="py-15 grid-col-50-100">
                        <div className="bg-black font-bold text-white rounded-medium text-center text-26 w-45 h-45 flex justify-center">
                            <span>5</span>
                        </div>
                        <div className="ml-10">
                            <p className="text-15 md:text-18 text-black">Você receberá um SMS, com um link para finalizar o cadastro e receberá a amostra na sua casa.</p>
                            <p className="text-purple font-bold bg-purple-200 p-15 rounded mt-15 text-15 md:text-18 break-words">[Experimentador] Para continuar seu cadastro visite o link:<br /> <span className=" font-medium break-all text-13">https://experimentador.com.br/pacorabanne/oseutokengerado</span></p>
                        </div>
                    </div>
                </article>
            }
        </section>
    )
}

export default Smartphone
