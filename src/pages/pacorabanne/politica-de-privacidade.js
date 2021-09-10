import Navbar from "../../components/molecule/Navbar/Navbar"
import Footer from "../../components/organism/Footer/Footer"
import TemplatePolitica from "../../components/templates/TemplatePolitica/TemplatePolitica"
import { NextSeo, ArticleJsonLd } from 'next-seo'

function politicadeprivacidade() {
    return (
        <>
          <NextSeo
			title="Política de Privacidade | Phantom by Paco Rabanne | Experimentador"
			description="Leia com atenção a nossa página de Política de Privacidade do Experimentador."
			canonical="https://experimentador.com.br/pacorabanne"
			openGraph={{
					url: 'https://experimentador.com.br/pacorabanne/politica-de-privacidade',
					title: 'Política de Privacidade | Phantom by Paco Rabanne | Experimentador',
					description: 'Leia com atenção a nossa página de Política de Privacidade do Experimentador.',
					images: [
						{
							url: 'https://experimentador.com.br/pacorabanne/img/phantom-section-voice.jpg',
							alt: 'Phantom by Paco Rabanne',
						},
					],
					site_name: 'Política de Privacidade | Phantom by Paco Rabanne | Experimentador'
			}}
			twitter={{
				handle: '@handle',
				site: '@site',
				cardType: 'summary_large_image'

			}}
            	
			/>
			<ArticleJsonLd
			url="https://experimentador.com.br/pacorabanne/politica-de-privacidade"
			title="Política de Privacidade | Phantom by Paco Rabanne | Experimentador"
			publisherName="Experimentador"
			publisherLogo="https://experimentador.com.br/pacorabanne/favicon144.png"
			description="Leia com atenção a nossa página de Política de Privacidade do Experimentador."
			/>
            <Navbar />
            <TemplatePolitica />
            <Footer />
        </>
    )
}

export default politicadeprivacidade
