import Navbar from "../../components/molecule/Navbar/Navbar"
import Footer from "../../components/organism/Footer/Footer"
import TemplatePerguntas from "../../components/templates/TemplatePerguntas/TemplatePerguntas"
import { NextSeo, ArticleJsonLd } from 'next-seo'


function PerguntasFrequentes() {
    return (
        <>
        <NextSeo
			title="Perguntas Frequentes | Phantom by Paco Rabanne | Experimentador"
			description="Tem alguma dúvida sobre o experimentador? Veja as perguntas mais frequentes respondidas."
			canonical="https://experimentador.com.br/pacorabanne"
			openGraph={{
					url: 'https://experimentador.com.br/pacorabanne/perguntas-frequentes',
					title: 'Perguntas Frequentes | Phantom by Paco Rabanne | Experimentador',
					description: 'Tem alguma dúvida sobre o experimentador? Veja as perguntas mais frequentes respondidas.',
					images: [
						{
							url: 'https://experimentador.com.br/pacorabanne/img/phantom-section-voice.jpg',
							alt: 'Phantom by Paco Rabanne',
						},
					],
					site_name: 'Perguntas Frequentes | Phantom by Paco Rabanne | Experimentador'
			}}
			twitter={{
				handle: '@handle',
				site: '@site',
				cardType: 'summary_large_image'

			}}
            	
			/>
			<ArticleJsonLd
			url="https://experimentador.com.br/pacorabanne/perguntas-frequentes"
			title="Perguntas Frequentes | Phantom by Paco Rabanne | Experimentador"
			publisherName="Experimentador"
			publisherLogo="https://experimentador.com.br/pacorabanne/favicon144.png"
			description="Tem alguma dúvida sobre o experimentador? Veja as perguntas mais frequentes respondidas."
			/>
            <Navbar />
            <TemplatePerguntas />
            <Footer />
        </>
    )
}

export default PerguntasFrequentes
