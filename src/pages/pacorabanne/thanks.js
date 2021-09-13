import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from 'next-seo'
const { default: TemplateThanks } = require("../../components/templates/TemplateThanks/TemplateThanks");

function thanks() {
    return (
        <>
                    <NextSeo
			title="Obrigado! | Phantom by paco rabanne | experimentador"
			description="Agora é só aguardar que a sua amostra chegará na sua casa!"
			openGraph={{
					url: 'https://experimentador.com.br/pacorabanne/thanks',
					title: 'Obrigado ! | Phantom by paco rabanne | experimentador',
					description: 'Agora é só aguardar que a sua amostra chegará na sua casa!',
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
			url="https://experimentador.com.br/pacorabanne/thanks"
			title="Obrigado! |  Phantom by paco rabanne | experimentador"
			publisherName="experimentador"
			publisherLogo="https://experimentador.com.br/pacorabanne/favicon144.png"
			description="Agora é só aguardar que a sua amostra chegará na sua casa!"
			/>
			<BreadcrumbJsonLd
			itemListElements={[
				{
				position: 1,
				name: 'Perguntas Frequentes',
				item: 'https://experimentador.com.br/pacorabanne/perguntas-frequentes',
				},
				{
				position: 2,
				name: 'Política de Privacidade',
				item: 'https://experimentador.com.br/pacorabanne/politica-de-privacidade',
				},
    		 ]}
    		/>
            <TemplateThanks />
        </>
    )
}

export default thanks
