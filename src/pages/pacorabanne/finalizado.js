const { default: TemplateFinalizado } = require("../../components/templates/TemplateFinalizado/TemplateFinalizado");
import { NextSeo, ArticleJsonLd } from 'next-seo'

function finalizado() {
    return (
        <>
        	<NextSeo
			title="Poxa, acabaram as amostras :( Phantom by paco rabanne | experimentador"
			description="Na compra do perfume Phantom, nos tamanhos de 50 ou 100 ml, você ganhará uma miniatura do perfume. Informe seu e-mail e desbloqueie seu cupom."
			openGraph={{
					url: 'https://experimentador.com.br/pacorabanne/finalizado',
					title: 'Poxa, acabaram as amostras :( Phantom by paco rabanne | experimentador',
					description: 'Na compra do perfume Phantom, nos tamanhos de 50 ou 100 ml, você ganhará uma miniatura do perfume. Informe seu e-mail e desbloqueie seu cupom.',
					images: [
						{
							url: '/img/phantom-share.jpg',
							alt: 'Phantom by paco rabanne',
						},
					],
					site_name: 'Poxa, acabaram as amostras :( Phantom by paco rabanne | experimentador'
			}}
			twitter={{
				handle: '@handle',
				site: '@site',
				cardType: 'summary_large_image'

			}}	
			/>
			<ArticleJsonLd
			url="https://experimentador.com.br/pacorabanne/finalizado"
			title="Poxa, acabaram as amostras :(  Phantom by paco rabanne | experimentador"
			publisherName="experimentador"
			publisherLogo="https://experimentador.com.br/pacorabanne/favicon144.png"
			description="Na compra do perfume Phantom, nos tamanhos de 50 ou 100 ml, você ganhará uma miniatura do perfume. Informe seu e-mail e desbloqueie seu cupom."
			/>
            <TemplateFinalizado />
        </>
    )
}

export default finalizado
