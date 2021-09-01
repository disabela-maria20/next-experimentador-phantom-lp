import Navbar from "../../molecule/Navbar/Navbar";
import Title from "../../atom/Title/Title";
import Footer from "../../organism/Footer/Footer";
import Paragraph from "../../atom/Paragraph/Paragraph";

function TemplateThanks() {
    return (
        <>
            <Navbar />
            <section className="bg-know-how bg-start bg-cover tm:py-38 md:py-136 h-full grid grid-cols-1">
                <div className="tm:container mx-auto grid md:grid-cols-2 tm:grid-cols-1 px-15 items-center place-content-center">
                    <div className="md:order-1 tm:order-2">
                        <img src="/img/robo-estilo.png" alt="Phantom by Paco Rabanne" />
                    </div>
                    <div className="md:order-2 tm:order-1">
                        <img src="/img/circle.svg" alt="Obrigado" className="self-center mx-auto pb-38"/>
                        <Title titulo="Obrigado! Sua amostra chegará em breve" extraclass="text-black text-center leading-title"/>
                        <Paragraph paragrafo="Fique atento no seu e-mail cadastrado, pois o status será atualizado." extraclass="text-black py-38 text-center" />
                    </div>
                </div>
            </section>
            <Footer />
            
        </>
    )
}

export default TemplateThanks
