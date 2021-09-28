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
export async function getServerSideProps() {
	const response = await axios.get("https://api.experimentador.com.br/api/v1/products?name=phantom", {
		headers: {
			"Api-key": "6SqCqv9Dkm8kNp0XKCVryKG2a2fsjztU",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": "true"
		}
	})
	const quantity = response.data.rows[0].quantity
	if (quantity <= 500) {
		//router.push('/finalizado')
		return {
			redirect: {
				destination: 'pacorabanne/finalizado',
				permanent: false,
			}
		}
	}
	return {
		props: {

		}, // will be passed to the page component as props
	}
}