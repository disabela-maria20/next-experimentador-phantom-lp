import TemplateFinalizadoThanks from '../../components/templates/TemplateFinalizadoThanks/TemplateFinalizadoThanks'
import { NextSeo, ArticleJsonLd } from 'next-seo'

function finalizadothanks() {
    return (
        <>
        <NextSeo
			title="Obrigado! | Phantom by Paco Rabanne | Experimentador"
			description="Aproveite o cupom e faça a compra em nossa loja parceira e receba uma surpresa em casa."
			canonical="https://experimentador.com.br/pacorabanne"
			openGraph={{
					url: 'https://experimentador.com.br/pacorabanne/finalizado-thanks',
					title: 'Obrigado ! | Phantom by Paco Rabanne | Experimentador',
					description: 'Aproveite o cupom e faça a compra em nossa loja parceira e receba uma surpresa em casa.',
					images: [
						{
							url: 'https://experimentador.com.br/pacorabanne/img/phantom-section-voice.jpg',
							alt: 'Phantom by Paco Rabanne',
						},
					],
					site_name: 'Obrigado! | Phantom by Paco Rabanne | Experimentador'
			}}
			twitter={{
				handle: '@handle',
				site: '@site',
				cardType: 'summary_large_image'

			}}
            noindex={true}
            nofollow={true}	
			/>
			<ArticleJsonLd
			url="https://experimentador.com.br/pacorabanne/finalizado-thanks"
			title="Obrigado! |  Phantom by Paco Rabanne | Experimentador"
			publisherName="Experimentador"
			publisherLogo="https://experimentador.com.br/pacorabanne/favicon144.png"
			description="Aproveite o cupom e faça a compra em nossa loja parceira e receba uma surpresa em casa."
			/>
            <TemplateFinalizadoThanks />
        </>
    )
}

export default finalizadothanks
