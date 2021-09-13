import TemplateFinalizadoThanks from '../../components/templates/TemplateFinalizadoThanks/TemplateFinalizadoThanks'
import { NextSeo, ArticleJsonLd } from 'next-seo'

function finalizadothanks() {
    return (
        <>
        <NextSeo
			title="Obrigado! | Phantom by paco rabanne | experimentador"
			description="Aproveite o cupom e faça a compra em nossa loja parceira e receba uma surpresa em casa."
			openGraph={{
					url: 'https://experimentador.com.br/pacorabanne/finalizado-thanks',
					title: 'Obrigado ! | Phantom by paco rabanne | experimentador',
					description: 'Aproveite o cupom e faça a compra em nossa loja parceira e receba uma surpresa em casa.',
					images: [
						{
							url: '/img/phantom-share.jpg',
							alt: 'Phantom by paco rabanne',
						},
					],
					site_name: 'Obrigado! | Phantom by paco rabanne | experimentador'
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
			title="Obrigado! |  Phantom by paco rabanne | experimentador"
			publisherName="experimentador"
			publisherLogo="https://experimentador.com.br/pacorabanne/favicon144.png"
			description="Aproveite o cupom e faça a compra em nossa loja parceira e receba uma surpresa em casa."
			/>
            <TemplateFinalizadoThanks />
        </>
    )
}

export default finalizadothanks
