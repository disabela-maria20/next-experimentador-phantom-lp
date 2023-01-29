import Navbar from "../../components/molecule/Navbar/Navbar"
import Footer from "../../components/organism/Footer/Footer"
import TemplatePerguntas from "../../components/templates/TemplatePerguntas/TemplatePerguntas"
import { NextSeo } from 'next-seo'


function PerguntasFrequentes() {
	return (
		<>
			<NextSeo
				title="Perguntas Frequentes | Phantom by paco rabanne | experimentador"
				description="Tem alguma dúvida sobre o experimentador? Veja as perguntas mais frequentes respondidas."
				openGraph={{
					url: 'https://experimentador.com.br/pacorabanne/perguntas-frequentes',
					title: 'Perguntas Frequentes | Phantom by paco rabanne | experimentador',
					description: 'Tem alguma dúvida sobre o experimentador? Veja as perguntas mais frequentes respondidas.',
					images: [
						{
							url: '/img/phantom-share.jpg',
							alt: 'Phantom by paco rabanne',
						},
					],
					site_name: 'Perguntas Frequentes | Phantom by paco rabanne | experimentador'
				}}
				twitter={{
					handle: '@handle',
					site: '@site',
					cardType: 'summary_large_image'

				}}

			/>
			<Navbar />
			<TemplatePerguntas />
			<Footer />
		</>
	)
}

export default PerguntasFrequentes
