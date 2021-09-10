import { NextSeo, ArticleJsonLd } from 'next-seo'
const { default: TemplateThanks } = require("../../components/templates/TemplateThanks/TemplateThanks");

function thanks() {
    return (
        <>
                    <NextSeo
			title="Obrigado! | Phantom by Paco Rabanne | Experimentador"
			description="Agora é só aguardar que a sua amostra chegará na sua casa!"
			canonical="https://experimentador.com.br/pacorabanne"
			openGraph={{
					url: 'https://experimentador.com.br/pacorabanne/thanks',
					title: 'Obrigado ! | Phantom by Paco Rabanne | Experimentador',
					description: 'Agora é só aguardar que a sua amostra chegará na sua casa!',
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
			url="https://experimentador.com.br/pacorabanne/thanks"
			title="Obrigado! |  Phantom by Paco Rabanne | Experimentador"
			publisherName="Experimentador"
			publisherLogo="https://experimentador.com.br/pacorabanne/favicon144.png"
			description="Agora é só aguardar que a sua amostra chegará na sua casa!"
			/>
            <TemplateThanks />
        </>
    )
}

export default thanks
