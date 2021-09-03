import TemplateCadastro from "../../components/templates/TemplateCadastro/TemplateCadastro";
import { useRouter } from 'next/router'



function CadastroHash() {

    const router = useRouter()
    const { queryPage } = router.query
    return (
        <>  
        <p>{queryPage}</p>
           <TemplateCadastro />
        </>
    )
}

export default CadastroHash
