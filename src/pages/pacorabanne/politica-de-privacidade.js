import Navbar from "../../components/molecule/Navbar/Navbar"
import Footer from "../../components/organism/Footer/Footer"
import TemplatePolitica from "../../components/templates/TemplatePolitica/TemplatePolitica"
import { NextSeo, ArticleJsonLd } from 'next-seo'

function politicadeprivacidade() {
    return (
        <>
          <NextSeo
			title="Política de Privacidade | Phantom by paco rabanne | experimentador"
			description="Leia com atenção a nossa página de Política de Privacidade do experimentador."
			openGraph={{
					url: 'https://experimentador.com.br/pacorabanne/politica-de-privacidade',
					title: 'Política de Privacidade | Phantom by paco rabanne | experimentador',
					description: 'Leia com atenção a nossa página de Política de Privacidade do experimentador.',
					images: [
						{
							url: '/img/phantom-share.jpg',
							alt: 'Phantom by paco rabanne',
						},
					],
					site_name: 'Política de Privacidade | Phantom by paco rabanne | experimentador'
			}}
			twitter={{
				handle: '@handle',
				site: '@site',
				cardType: 'summary_large_image'

			}}
            	
			/>
			<ArticleJsonLd
			url="https://experimentador.com.br/pacorabanne/politica-de-privacidade"
			title="Política de Privacidade | Phantom by paco rabanne | experimentador"
			publisherName="experimentador"
			publisherLogo="https://experimentador.com.br/pacorabanne/favicon144.png"
			description="Leia com atenção a nossa página de Política de Privacidade do experimentador."
			/>
            <Navbar />
            <TemplatePolitica />
            <Footer />
        </>
    )
}

export default politicadeprivacidade
