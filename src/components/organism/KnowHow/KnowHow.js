import Paragraph from "../../atom/Paragraph/Paragraph";
import Title from "../../atom/Title/Title";

function KnowHow({}) {
    return (
       <>
            <section className="bg-know-how bg-start bg-cover tm:py-38 md:py-136 h-full grid grid-cols-1">
                <div className="tm:container mx-auto grid grid-cols-2 px-15">
                    <div>
                        <img src="/img/robo-estilo.png" alt="Phantom by Paco Rabanne" />
                    </div>
                    <div>
                        <Title titulo="Peça já uma amostra" extraclass="text-black" />
                        <Paragraph paragrafo="Para pedir sua amostra, basta utilizar o Google Assistant ou Amazon Alexa, escutar a experiência e, pronto! Sua amostra chegará para você em alguns dias.  Mas se não souber pedir, siga os passos abaixo, é fácil!" extraclass="text-black py-38" />
                        <h4 className="font-bold tm:text-18 md:text-26 leading-title text-center uppercase">Selecione o seu dispositivo abaixo</h4>
                    </div>
                </div>
            </section>
       </>
    )
}

export default KnowHow
