import Head from 'next/head'
import TemplateHome from '../components/templates/TemplateHome/TemplateHome'

export default function Home() {
  return (
    <>
      <Head>
        <title>Phantom by Paco Rabanne | Experimentador</title>
        <meta name="description" content="Phantom by Paco Rabanne | Experimentador" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TemplateHome />
    </>
  )
}
