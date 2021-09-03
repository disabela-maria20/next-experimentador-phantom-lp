import TemplateCadastro from "../../components/templates/TemplateCadastro/TemplateCadastro";
import { useRouter } from 'next/router'



function cadastro() {

    const router = useRouter()
    const { queryPage } = router.query
    return (
        <>  
        <p>{queryPage}</p>
           <TemplateCadastro />
        </>
    )
}

export default cadastro
