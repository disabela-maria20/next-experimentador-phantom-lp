import Paragraph from "../../atom/Paragraph/Paragraph"
import Title from "../../atom/Title/Title"
import Navbar from "../../molecule/Navbar/Navbar"
import Conversao from "../../organism/Conversao/Conversao"
import Footer from "../../organism/Footer/Footer"
import Link from "next/link"

function TemplateFinalizado() {
    return (
        <>
            <Navbar />
            <section className="bg-finalizado bg-start bg-cover tm:py-38 md:py-136 h-full grid grid-cols-1">
                <div className="tm:container mx-auto grid md:grid-cols-2 tm:grid-cols-1 px-15">
                    <div className="md:order-1 tm:order-2">
                        <img src="/img/webp/robo-miniatura.webp" alt="Phantom by Paco Rabanne" className="self-center mx-auto"/>
                    </div>
                    <div className="md:order-2 tm:order-1">
                        <Title titulo="Poxa, acabaram as amostras :(" extraclass="text-white"/>
                        <Paragraph paragrafo="Mas temos uma surpresa para você. Na compra do perfume Phantom, nos tamanhos de 50 ou 100 ml na Beleza na Web, você ganhará uma miniatura do perfume. Informe seu e-mail e desbloqueie seu cupom." extraclass="text-white py-38" />
                        <Conversao />
                        <span className="text-13 pt-10 ">Em caso de dúvidas: <Link href="mailto:sac@experimentador.com.br"><a className="hover:underline">sac@experimentador.com.br</a></Link></span>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default TemplateFinalizado
