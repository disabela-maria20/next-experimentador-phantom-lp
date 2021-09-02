import Link from "next/link"
import Paragraph from "../../atom/Paragraph/Paragraph"
import Title from "../../atom/Title/Title"
import Navbar from "../../molecule/Navbar/Navbar"
import Footer from "../../organism/Footer/Footer"

function TemplateFinalizadoThanks() {
    return (
        <>
            <Navbar />
            <section className="bg-finalizado bg-start bg-cover tm:py-38 md:py-136 h-full grid grid-cols-1">
                <div className="tm:container mx-auto grid md:grid-cols-2 tm:grid-cols-1 px-15 place-content-center items-center">
                    <div className="md:order-1 tm:order-2">
                        <img src="/img/robo-miniatura.png" alt="Phantom by Paco Rabanne" className="self-center mx-auto" />
                    </div>
                    <div className="md:order-2 tm:order-1">
                        <div className="grid grid-cols-1 gap-22">
                            <div>
                                <Title titulo="Seu cupom é:" extraclass="text-white text-center" />
                            </div>
                            <div className="bg-white rounded-medium text-black text-center font-bold text-45 md:text-55 p-13 mt-22 uppercase tracking-widest">Phantom</div>
                            <div className="text-15 text-center text-white">*promoção válida enquanto durarem os estoques</div>
                            <div className="mx-auto">
                                <Link href="https://www.belezanaweb.com.br/phantom-paco-rabanne-eau-de-toilette-perfume-masculino-50ml/?utm_source=puig&utm_medium=amostras-qrcode&utm_campaign=phantom_pacorabanne">
                                    <a target="_blank" className="bg-purple bg-opacity-90 hover:bg-opacity-100 text-white text-center font-bold text-18 rounded-full py-13 tm:px-18 md:px-45 outline-none hover:bg-purple hover:text-white hover:shadow-lg transition tm:col-span-6 md:col-span-2">Compre pelo site</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default TemplateFinalizadoThanks
