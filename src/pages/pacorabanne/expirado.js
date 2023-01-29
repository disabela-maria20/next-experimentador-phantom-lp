import TemplateExpirado from '../../components/templates/TemplateExpirado/TemplateExpirado'
import { NextSeo, ArticleJsonLd } from 'next-seo'

const expirado = () => {
	return (
		<div>
			<NextSeo
				title="Link expirado | Phantom by paco rabanne | experimentador"
				description="Infelizmente o link que está tentando acessar está expirado."
				openGraph={{
					url: 'https://experimentador.com.br/pacorabanne/expirado',
					title: 'Link Expirado | Phantom by paco rabanne | experimentador',
					description: 'Infelizmente o link que está tentando acessar está expirado.',
					images: [
						{
							url: '/img/phantom-share.jpg',
							alt: 'Phantom by paco rabanne',
						},
					],
					site_name: 'Link expirado | Phantom by paco rabanne | experimentador'
				}}
				twitter={{
					handle: '@handle',
					site: '@site',
					cardType: 'summary_large_image'

				}}
				noindex={true}
			/>
			<ArticleJsonLd
				url="https://experimentador.com.br/pacorabanne/expirado"
				title="Link expirado | Phantom by paco rabanne | experimentador"
				publisherName="experimentador"
				publisherLogo="https://experimentador.com.br/pacorabanne/favicon144.png"
				description="Infelizmente o link que está tentando acessar está expirado."
			/>
			<TemplateExpirado />
		</div>
	)
}

export default expirado
