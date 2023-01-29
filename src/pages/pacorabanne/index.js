import { NextSeo, ArticleJsonLd } from 'next-seo'
import TemplateHome from '../../components/templates/TemplateHome/TemplateHome'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Home() {
	const router = useRouter()

	return (
		<>
			<NextSeo
				title="Amostra Phantom by paco rabanne | experimentador"
				description="Peça uma Amostra Grátis pelo Google Assistente ou Alexa e receba em sua casa. Campanha ativa até durarem nossos estoques."
				canonical="https://experimentador.com.br/pacorabanne"
				openGraph={{
					url: 'https://experimentador.com.br/pacorabanne',
					title: 'Amostra Phantom by paco rabanne | experimentador',
					description: 'Peça uma Amostra Grátis pelo Google Assistente ou Alexa e receba em sua casa. Campanha ativa até durarem nossos estoques.',
					images: [
						{
							url: '/img/phantom-share.jpg',
							alt: 'Phantom by paco rabanne',
						},
					],
					site_name: 'Amostra Phantom by paco rabanne | experimentador'
				}}
				twitter={{
					handle: '@handle',
					site: '@site',
					cardType: 'summary_large_image'

				}}
			/>
			<ArticleJsonLd
				url="https://experimentador.com.br/pacorabanne"
				title="Amostra Phantom by paco rabanne | experimentador"
				publisherName="Experimentador"
				publisherLogo="https://experimentador.com.br/pacorabanne/favicon144.png"
				description="Peça uma Amostra Grátis pelo Google Assistente ou Alexa e receba em sua casa. Campanha ativa até durarem nossos estoques."
			/>
			<TemplateHome />
		</>
	)

}
