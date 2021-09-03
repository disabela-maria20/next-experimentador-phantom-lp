import TemplateCadastro from "../../components/templates/TemplateCadastro/TemplateCadastro";
import router, { useRouter } from 'next/router'
import axios from "axios";

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

    return { props: {} }
}

export default function CadastroHash() {
    const { cadastro } = useRouter().query
    return (
        <>
            <TemplateCadastro token={cadastro} />
        </>
    )
}
