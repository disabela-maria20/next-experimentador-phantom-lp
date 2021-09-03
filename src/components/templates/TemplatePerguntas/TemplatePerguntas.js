import Collapsible from "react-collapsible"
import Title from "../../atom/Title/Title"
import ContainerParagraph from "../../organism/ContainerParagraph/ContainerParagraph"
import HeaderGeral from "../../organism/HeaderGeral/HeaderGeral"


function TemplatePerguntas() {
    return (
        <>
            <HeaderGeral>
              <Title titulo="Perguntas Frequentes" extraclass="text-white text-center" />
            </HeaderGeral> 
            <ContainerParagraph>
                <Collapsible trigger="O que é o Experimentador?" className="border-b border-grey-200 pb-18" openedClassName="border-b border-purple-200 pb-18" triggerClassName="py-18 md:text-26 tm:text-18 font-bold text-black w-full" triggerOpenedClassName="py-18 md:text-26 tm:text-18 font-bold text-purple w-full" >
                    <p className="py-18">Entre grandes marcas e clientes, criamos campanhas que unem Tecnologia e Dados. Através de um simples comando em seu Google Assistente ou Alexa, como <strong>"Ok Google, falar com Experimentador"</strong>, você poderá participar de campanhas de marcas incriveis e pedir Amostras Grátis a partir de uma experiência de voz imersiva e única para cada campanha ativa.</p>
                </Collapsible>
                <Collapsible trigger="Como pedir amostra no Experimentador?" className="border-b border-grey-200 py-18" openedClassName="border-b border-purple-200 py-18" triggerClassName="py-18 md:text-26 tm:text-18 font-bold text-black w-full" triggerOpenedClassName="py-18 md:text-26 tm:text-18 font-bold text-purple w-full" >
                    <p className="py-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam metus metus, malesuada sed elementum vel, ultrices a ex. Morbi dignissim turpis sed est iaculis, quis condimentum arcu rhoncus. Donec quis magna vitae dui porta placerat congue ac dui. Mauris vulputate gravida sem eu convallis. In posuere non libero ac dapibus. Duis condimentum vel urna eget pulvinar. Etiam id nisl suscipit, mollis sem eget, sodales enim. Maecenas sodales ex ac facilisis blandit. Sed non magna vel neque tincidunt lobortis. Nam ex ante, fringilla eu tincidunt ac, maximus et lectus. Suspendisse bibendum dapibus aliquam.</p>
                </Collapsible>
                <Collapsible trigger="O experimentador é confiável?" className="border-b border-grey-200 py-18" openedClassName="border-b border-purple-200 py-18" triggerClassName="py-18 md:text-26 tm:text-18 font-bold text-black w-full" triggerOpenedClassName="py-18 md:text-26 tm:text-18 font-bold text-purple w-full" >
                    <p className="py-18"> Sim, sediados em são Paulo.</p>
                </Collapsible>
                <Collapsible trigger="Quanto tempo demora para receber uma amostra no Experimentador?" className="border-b border-grey-200 py-18" openedClassName="border-b border-purple-200 py-18" triggerClassName="py-18 md:text-26 tm:text-18 font-bold text-black w-full" triggerOpenedClassName="py-18 md:text-26 tm:text-18 font-bold text-purple w-full" >
                    <p className="py-18">Para amostras enviadas pelos Correios em campanhas que não sejam para retirada em lojas parceiras, os prazos são: Centro oeste em até 7 dias úteis, São Paulo até 3 dias úteis, Extremo Sul | Nordeste até 12 dias úteis e Norte | Acre ate 20 dias úteis.</p>
                </Collapsible>
            </ContainerParagraph> 
        </>
    )
}

export default TemplatePerguntas
