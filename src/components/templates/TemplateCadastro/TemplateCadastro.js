import Navbar from "../../molecule/Navbar/Navbar";
import Cadastro from "../../organism/Cadastro/Cadastro";
import Title from "../../atom/Title/Title";
import Footer from "../../organism/Footer/Footer";
import Paragraph from "../../atom/Paragraph/Paragraph";

function TemplateCadastro({ token }) {
    return (
        <>
            <Navbar />
            <section className="bg-know-how bg-start bg-cover tm:py-38 md:py-136 h-full grid grid-cols-1">
                <div className="tm:container mx-auto grid md:grid-cols-2 tm:grid-cols-1 px-15">
                    <div className="md:order-1 tm:order-2">
                        <img src="/img/robo-estilo.png" alt="Phantom by Paco Rabanne" />
                    </div>
                    <div className="md:order-2 tm:order-1">
                        <Title titulo="Libere sua amostra" extraclass="text-black"/>
                        <Paragraph paragrafo="Preencha atentamente os campos abaixo para liberar sua amostra" extraclass="text-black py-38" />
                        <Cadastro token={token}/>
                    </div>
                </div>
            </section>
            <Footer />
            
        </>
    )
}

export default TemplateCadastro
