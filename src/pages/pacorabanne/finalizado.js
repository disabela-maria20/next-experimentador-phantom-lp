const { default: TemplateFinalizado } = require("../../components/templates/TemplateFinalizado/TemplateFinalizado");
import { NextSeo, ArticleJsonLd } from 'next-seo'

function finalizado() {
    return (
        <>
        	<NextSeo
			title="Poxa, acabaram as amostras :( Phantom by Paco Rabanne | Experimentador"
			description="Mas temos uma surpresa para você. Na compra do perfume Phantom, nos tamanhos de 50 ou 100 ml na Beleza na Web, você ganhará uma miniatura do perfume. Informe seu e-mail e desbloqueie seu cupom."
			canonical="https://experimentador.com.br/pacorabanne"
			openGraph={{
					url: 'https://experimentador.com.br/pacorabanne/finalizado',
					title: 'Poxa, acabaram as amostras :( Phantom by Paco Rabanne | Experimentador',
					description: 'Mas temos uma surpresa para você. Na compra do perfume Phantom, nos tamanhos de 50 ou 100 ml na Beleza na Web, você ganhará uma miniatura do perfume. Informe seu e-mail e desbloqueie seu cupom.',
					images: [
						{
							url: 'https://experimentador.com.br/pacorabanne/img/phantom-section-voice.jpg',
							alt: 'Phantom by Paco Rabanne',
						},
					],
					site_name: 'Poxa, acabaram as amostras :( Phantom by Paco Rabanne | Experimentador'
			}}
			twitter={{
				handle: '@handle',
				site: '@site',
				cardType: 'summary_large_image'

			}}	
			/>
			<ArticleJsonLd
			url="https://experimentador.com.br/pacorabanne/finalizado"
			title="Poxa, acabaram as amostras :(  Phantom by Paco Rabanne | Experimentador"
			publisherName="Experimentador"
			publisherLogo="https://experimentador.com.br/pacorabanne/favicon144.png"
			description="Mas temos uma surpresa para você. Na compra do perfume Phantom, nos tamanhos de 50 ou 100 ml na Beleza na Web, você ganhará uma miniatura do perfume. Informe seu e-mail e desbloqueie seu cupom."
			/>
            <TemplateFinalizado />
        </>
    )
}

export default finalizado
