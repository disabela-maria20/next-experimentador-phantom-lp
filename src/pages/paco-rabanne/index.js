import Head from 'next/head'
import TemplateHome from '../../components/templates/TemplateHome/TemplateHome'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Home() {
	const router = useRouter()

		return (
			<>
      	<Head>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="pt-BR" />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
						<meta name="title" content="Phantom by Paco Rabanne | Experimentador" />
						<meta name="description" content="Phantom, a nova fragrância masculina de Paco Rabanne. A essência da autoconfiança movida por energias positivas." />
						<meta name="keywords" content="phantom, paco, rabanne, perfume, cheiro, masculino, tecnologia" />
						<link rel="shortcut icon" href="favicon144.png" />

						<title>Phantom by Paco Rabanne | Experimentador</title>

				<meta property="og:type" content="page" />
				<meta property="og:url" content="thanks" />
				<meta property="og:title" content="Phantom by Paco Rabanne | Experimentador" />
				<meta property="og:image" content="favicon144.png" />
				<meta property="og:description" content="Phantom, a nova fragrância masculina de Paco Rabanne. A essência da autoconfiança movida por energias positivas." />

				<meta property="article:author" content="Experimentador" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@" />
				<meta name="twitter:title" content="Phantom by Paco Rabanne | Experimentador" />
				<meta name="twitter:creator" content="@" />
				<meta name="twitter:description" content="Phantom, a nova fragrância masculina de Paco Rabanne. A essência da autoconfiança movida por energias positivas." />
			</Head>
			<TemplateHome />
			</>
	)
	
}
export async function getServerSideProps() {
	const response = await axios.get("https://api.experimentador.com.br/api/v1/products?name=phantom", {
		headers: {
			"Api-key": "6SqCqv9Dkm8kNp0XKCVryKG2a2fsjztU",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": "true"
		}  
	})
	const quantity = response.data.rows[0].quantity
	if(quantity == 0) {
		//router.push('/finalizado')
		return {
			redirect: {
				destination : 'paco-rabanne/finalizado',
				permanent: false,
			}
		}
	}
	return {
	  props: {
		  
	  }, // will be passed to the page component as props
	}
}