import Collapsible from "react-collapsible"
import Title from "../../atom/Title/Title"
import ContainerParagraph from "../../organism/ContainerParagraph/ContainerParagraph"
import HeaderGeral from "../../organism/HeaderGeral/HeaderGeral"
import Link from 'next/link'


function TemplatePerguntas() {
    return (
        <>
            <HeaderGeral>
                <Title titulo="Perguntas Frequentes" extraclass="text-white text-center" />
            </HeaderGeral>
            <ContainerParagraph>
                <Collapsible trigger="O que é o Experimentador?" className="border-b border-grey-200 pb-18" openedClassName="border-b border-purple-200 pb-18" triggerClassName="py-18 md:text-26 tm:text-18 font-bold text-black w-full" triggerOpenedClassName="py-18 md:text-26 tm:text-18 font-bold text-purple w-full" >
                    <p className="py-18">Entre grandes marcas e clientes, criamos campanhas que unem Tecnologia e Dados. Através de um simples comando em seu Google Assistente ou Alexa, como <strong>&quot;Ok Google, falar com Experimentador&quot;</strong>, você poderá participar de campanhas de marcas incriveis e pedir Amostras Grátis a partir de uma experiência de voz imersiva e única para cada campanha ativa.</p>
                </Collapsible>
                <Collapsible trigger="Como pedir amostra no Experimentador?" className="border-b border-grey-200 py-18" openedClassName="border-b border-purple-200 py-18" triggerClassName="py-18 md:text-26 tm:text-18 font-bold text-black w-full" triggerOpenedClassName="py-18 md:text-26 tm:text-18 font-bold text-purple w-full" >
                    <p className="py-18">
                        1. Em seu smartphone ou smart speaker, diga o comando: &quot;Ok Google, falar com Experimentador&quot; ou &quot;Alexa, abrir Experimentador&quot; 2. Siga os passos de acordo com a experiência 3. Você receberá um sms que funciona como um token único e intransferível, clique e será direcionado para o último passo. 4. Finalize o formulário com seus dados, que devem estar atualizados. Dentro do prazo, receberá sua amostra.
                    </p>
                </Collapsible>
                <Collapsible trigger="O experimentador é confiável?" className="border-b border-grey-200 py-18" openedClassName="border-b border-purple-200 py-18" triggerClassName="py-18 md:text-26 tm:text-18 font-bold text-black w-full" triggerOpenedClassName="py-18 md:text-26 tm:text-18 font-bold text-purple w-full" >
                    <p className="py-18"> 
                        Sim. O Experimentador é um serviço criado pela <Link href="https://adventures.inc"><a className="hover:undeline" target="_blank">Adventures.Inc</a></Link>, sediada em São Paulo - SP sobre o CNPJ: 30.798.660/0001-20 e tem como objetivo oferecer uma experiência digital de distribuição de amostras de produtos entre marcas e seus consumidores.
                    </p>
                </Collapsible>
                <Collapsible trigger="Quanto tempo demora para receber uma amostra no Experimentador?" className="border-b border-grey-200 py-18" openedClassName="border-b border-purple-200 py-18" triggerClassName="py-18 md:text-26 tm:text-18 font-bold text-black w-full" triggerOpenedClassName="py-18 md:text-26 tm:text-18 font-bold text-purple w-full" >
                    <p className="py-18">Para amostras enviadas pelos Correios em campanhas que não sejam para retirada em lojas parceiras, os prazos são: Centro oeste em até 7 dias úteis, São Paulo até 3 dias úteis, Extremo Sul | Nordeste até 12 dias úteis e Norte | Acre ate 20 dias úteis.</p>
                </Collapsible>
            </ContainerParagraph>
        </>
    )
}

export default TemplatePerguntas
