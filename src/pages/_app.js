import 'tailwindcss/tailwind.css'
import '../../styles/globals.css'
import CookieConsent from 'react-cookie-consent'
import Head from 'next/head'
import Link from 'next/link'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="pt-BR" />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel="shortcut icon" href="/favicon144.png" />
    </Head>
  <Component {...pageProps} />
  <CookieConsent
  buttonText="Aceitar"
  cookieName="Experimentador"
  style={{
      background: "black",
      color: "white",
      fontWeight: "regular",
  }}
  buttonStyle={{
      background: "#CC2A5D",
      color: "white",
      fontWeight: "regular",
      textTransform: "uppercase",
  }}
  expires={999} 
  overlay>
      Este site usa cookies de terceiros para elevar a experiência do usuário. Confira nossa <Link href="/pacorabanne/politica-de-privacidade"><a className="hover:underline">Política de Privacidade</a></Link>.
  </CookieConsent>
  </>
  )
}

export default MyApp
