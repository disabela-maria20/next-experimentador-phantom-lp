import Paragraph from "../../atom/Paragraph/Paragraph"
import Title from "../../atom/Title/Title"
import ContainerParagraph from "../../organism/ContainerParagraph/ContainerParagraph"
import HeaderGeral from "../../organism/HeaderGeral/HeaderGeral"

const pStyle = "md:text-18 tm:text-15 text-black pb-18"

function TemplatePolitica() {
    return (
        <>
        <HeaderGeral>
            <Title titulo="Política de Privacidade" extraclass="text-white text-center" />
        </HeaderGeral>
        <ContainerParagraph>
            <p className={pStyle}><strong>A AVELLAR MEDIA CONSULTORIA, PUBLICIDADE E MARKETING LTDA.(“Adventures”)</strong> preocupa-se com a sua privacidade e quer que vocêesteja familiarizado com a forma como coletamos, utilizamos e divulgamos informações,   respeitando   todas   as   diretrizes   descritas   na   legislação brasileira, especificamente a Lei Geral de Proteção de Dados (“LGPD”). </p>
            <p className={pStyle}>Esta Política de Privacidade descreve as nossas práticas no âmbito das informações que nós recolhemos ou os nossos prestadores de serviços recolhem através do website ou da aplicação (doravante designados por "Serviço") operado e controlado por nós, a partir do qual está de acordo aesta Política de Privacidade.  Ao disponibilizar-nos informações pessoais ou vão utilizar o Serviço, você confirma que leu e compreendeu esta Política de Privacidade</p>
            <h2 className="text-black md:text-38 tm:text-26 font-bold"></h2>
        </ContainerParagraph>
        </>
    )
}

export default TemplatePolitica
