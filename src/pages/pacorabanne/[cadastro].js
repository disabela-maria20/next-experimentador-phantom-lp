import TemplateCadastro from "../../components/templates/TemplateCadastro/TemplateCadastro";
import router, { useRouter } from 'next/router'
import axios from "axios";
import { NextSeo, ArticleJsonLd } from 'next-seo'

export async function getServerSideProps({ params }) {

    const { data: res } = await axios.get(`https://api.experimentador.com.br/api/v1/links?token=${params.cadastro}`, {
        headers: {
            'Api-Key': '6SqCqv9Dkm8kNp0XKCVryKG2a2fsjztU',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
        }
    })

    const token = res.data && res.data[0]

    if (!token) {
        return {
            redirect: {
                permanent: false,
                destination: "/pacorabanne/expirado"
            }
        }
    }

    if (token.is_used) {
        return {
            redirect: {
                permanent: false,
                destination: "/pacorabanne/expirado"
            }
        }
    }

    const response = await axios.get("https://api.experimentador.com.br/api/v1/products?name=phantom", {
        headers: {
            "Api-key": "6SqCqv9Dkm8kNp0XKCVryKG2a2fsjztU",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true"
        }
    })
    const quantity = response.data.rows[0].quantity
    if (quantity <= 500) {
        return {
            redirect: {
                destination: '/pacorabanne/finalizado',
                permanent: false,
            }
        }
    }

    return { props: {} }
}

export default function CadastroHash() {
    const { cadastro } = useRouter().query
    return (
        <>
            <NextSeo
                title="Cadastro | Phantom by paco rabanne | experimentador"
                description="Cadastre para receber sua amostra Phantom by paco rabanne em sua casa."
                openGraph={{
                    url: 'https://experimentador.com.br/pacorabanne/expirado',
                    title: 'Cadastro | Phantom by paco rabanne | experimentador',
                    description: 'Cadastre para receber sua amostra Phantom by paco rabanne em sua casa.',
                    images: [
                        {
                            url: '/img/phantom-share.jpg',
                            alt: 'Phantom by paco rabanne',
                        },
                    ],
                    site_name: 'Cadastro | Phantom by paco rabanne | experimentador'
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image'

                }}
                noindex={true}
            />
            <ArticleJsonLd
                url={`https://experimentador.com.br/pacorabanne/${cadastro}`}
                title="Cadastro | Phantom by paco rabanne | experimentador"
                publisherName="experimentador"
                publisherLogo="https://experimentador.com.br/pacorabanne/favicon144.png"
                description="Cadastre para receber sua amostra Phantom by paco rabanne em sua casa."
            />
            <TemplateCadastro token={cadastro} />
        </>
    )
}

