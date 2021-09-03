import TemplateCadastro from "../../components/templates/TemplateCadastro/TemplateCadastro";
import { useRouter } from 'next/router'



function cadastro() {

    const router = useRouter()
    const { cadastro } = router.query
    return (
        <>  
        <p>{cadastro}</p>
           <TemplateCadastro />
        </>
    )
}

export default cadastro
