import TemplateExpirado from '../../components/templates/TemplateExpirado/TemplateExpirado'
import { NextSeo, ArticleJsonLd } from 'next-seo'

const expirado = () => {
    return (
        <div>
            <NextSeo
			title="Link expirado | Phantom by Paco Rabanne | Experimentador"
			description="Infelizmente o link q ue está tentando acessar está expirado."
			canonical="https://experimentador.com.br/pacorabanne"
			openGraph={{
					url: 'https://experimentador.com.br/pacorabanne/expirado',
					title: 'Link Expirado | Phantom by Paco Rabanne | Experimentador',
					description: 'Infelizmente o link que está tentando acessar está expirado.',
					images: [
						{
							url: 'https://experimentador.com.br/pacorabanne/img/phantom-section-voice.jpg',
							alt: 'Phantom by Paco Rabanne',
						},
					],
					site_name: 'Link expirado | Phantom by Paco Rabanne | Experimentador'
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
			title="Link expirado | Phantom by Paco Rabanne | Experimentador"
			publisherName="Experimentador"
			publisherLogo="https://experimentador.com.br/pacorabanne/favicon144.png"
			description="Infelizmente o link q ue está tentando acessar está expirado."
			/>
            <TemplateExpirado />
        </div>
    )
}

export default expirado
