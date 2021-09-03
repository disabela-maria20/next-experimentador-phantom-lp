import Head from 'next/head'

const { default: TemplateThanks } = require("../../components/templates/TemplateThanks/TemplateThanks");

function thanks() {
    return (
        <>
        <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="pt-BR" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name="title" content="Obrigado | Phantom by Paco Rabanne | Experimentador" />
				<meta name="description" content="Phantom, a nova fragrância masculina de Paco Rabanne. A essência da autoconfiança movida por energias positivas." />
				<meta name="keywords" content="phantom, paco, rabanne, perfume, cheiro, masculino, tecnologia" />
				<link rel="shortcut icon" href="favicon144.png" />

				<title>Obrigado | Phantom by Paco Rabanne | Experimentador</title>

                <meta property="og:type" content="page" />
                <meta property="og:url" content="thanks" />
                <meta property="og:title" content="Obrigado | Phantom by Paco Rabanne | Experimentador" />
                <meta property="og:image" content="favicon144.png" />
                <meta property="og:description" content="Phantom, a nova fragrância masculina de Paco Rabanne. A essência da autoconfiança movida por energias positivas." />

                <meta property="article:author" content="Experimentador" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@" />
                <meta name="twitter:title" content="Obrigado | Phantom by Paco Rabanne | Experimentador" />
                <meta name="twitter:creator" content="@" />
                <meta name="twitter:description" content="Phantom, a nova fragrância masculina de Paco Rabanne. A essência da autoconfiança movida por energias positivas." />
        </Head>
            <TemplateThanks />
        </>
    )
}

export default thanks
