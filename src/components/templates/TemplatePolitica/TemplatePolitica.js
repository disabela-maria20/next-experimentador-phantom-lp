import Link from "next/link"
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
            <p className={pStyle}><strong>A AVELLAR MEDIA CONSULTORIA, PUBLICIDADE E MARKETING LTDA.(Adventures)</strong> preocupa-se com a sua privacidade e quer que vocêesteja familiarizado com a forma como coletamos, utilizamos e divulgamos informações,   respeitando   todas   as   diretrizes   descritas   na   legislação brasileira, especificamente a Lei Geral de Proteção de Dados (LGPD). </p>
            <p className={pStyle}>Esta Política de Privacidade descreve as nossas práticas no âmbito das informações que nós recolhemos ou os nossos prestadores de serviços recolhem através do website ou da aplicação (doravante designados por Serviço) operado e controlado por nós, a partir do qual está de acordo aesta Política de Privacidade.  Ao disponibilizar-nos informações pessoais ou vão utilizar o Serviço, você confirma que leu e compreendeu esta Política de Privacidade</p>
            <h3 className="text-black md:text-26 tm:text-18 font-bold py-38">1. Coleta de Informações</h3>
            <p className={pStyle}>Podemos pedir-lhe que submeta seus dados pessoais para poder beneficiar-lhe de determinadas funcionalidades do aplicativo, tais como: envio das amostras; envio de newsletter e/ou informativos por e-mail ou correios; sugestões/indicadores; processamento e envio de pedidos/amostras grátis; entre outros. Podemos também pedir dados pessoais para participar de uma atividade específica (tais como sorteios ou outras promoções), relativa ao aplicativo.</p>
            <p className={pStyle}>A Adventures poderá combinar os dados pessoais que submeter com outros dados pessoais cedidos por você, quer online quer offline, incluindo, mas não se limitando a: histórico de pedidos; participação em outras campanhas promovidas pelas Adventures; entre outros.  Podemos igualmente combiná-las com dados pessoais que recebemos sobre você decorrentes de fontes de informação de domínio público (incluindo as informações de seus perfis de redes sociais disponíveis publicamente).</p>
            <p className={pStyle}>Se, durante o uso do aplicativo, nos for fornecido dados pessoais de terceiros, você declara que tem autoridade/capacidade para fornecer, e que nos autoriza a utilizar as informações em conformidade com esta Política de Privacidade.</p>
            <h3 className="text-black md:text-26 tm:text-18 font-bold py-38 uppercase">2. Informações Sensíveis</h3>
            <p className={pStyle}>Exceto se especificamente o solicitarmos ou o convidarmos a tal, pedimos-lhe que não nos envie nem divulgue informações pessoais sensíveis (por ex., documentos oficiais de identificação, informações relacionadas com a origem racial ou étnica, opiniões políticas, religião ou crenças filosóficas, condições clínicas e de saúde, vida sexual ou orientação sexual, registo criminal ou filiação sindical, dados biométricos ou genéticos) no através deste aplicativo ou de qualquer outra forma.</p>
            <h3 className="text-black md:text-26 tm:text-18 font-bold py-38 uppercase">2. Como utilizamos e divulgamos informações</h3>
            <p className={pStyle}>Utilizamos e divulgamos as informações que nos disponibiliza conforme descrito no aplicativo. Caso deseje anular e ou excluir qualquer tipo de dado pessoal, entre em contato através do formulário a seguir.</p>
            <p className={pStyle}>Quando exigido por lei, obteremos o seu consentimento para utilizar os seus dados pessoais no ato da coleta de informações. Podemos também utilizar seus dados pessoais conforme necessário para celebrar um contrato, cumprir uma obrigação legal, ou para nossos interesses comerciais legítimos.  Podemos também contar com outras bases legais, especificamente para:</p>
            <p className={pStyle}><strong>a) Fornecer a funcionalidade do Aplicativo e satisfazer os seus pedidos.</strong></p>
            <ul className="md:text-18 tm:text-15 text-black pb-18 list-disc">
                <li>fornecer a funcionalidade do Aplicativo e prover serviço aos outros clientes;</li>
                <li>responder às suas questões e satisfazer os seus pedidos, como por exemplo, enviar-lhe os documentos que solicitar ou alertas de e-mail;</li>
                <li>enviar informações importantes relativas ao nosso relacionamento com você ou relativas ao aplicativo, alterações dos nossos termos, condições e políticas e/ou outras informações administrativas.</li>
            </ul>
            <p className={pStyle}><strong>b) Realizaremos estas atividades para gerir a nossa relação contratual com você e/ou cumprir uma obrigação legal.</strong></p>
            <p className={pStyle}><strong>c) Cumprimento dos nossos objetivos comerciais.</strong></p>
            <ul className="md:text-18 tm:text-15 text-black pb-18 list-disc">
                <li>análise de dados, por exemplo, para melhorar a eficiência do Aplicativo;</li>
                <li>auditorias, para verificar se os nossos processos internos funcionam como pretendido e estão em conformidade com os requisitos legais, regulamentares ou contratuais;</li>
                <li>fins de monitoramento de fraude e segurança, por exemplo, para detectar e prevenir ataques cibernéticos ou tentativas de roubo de identidade;</li>
                <li>o desenvolvimento de novos produtos e serviços;</li>
                <li>elevar, melhorar ou modificar o nosso aplicativo, ou produtos e serviços;</li>
                <li>identificar as tendências de uso do Aplicativo, por exemplo, para entender que aspectos do nosso Serviço são de maior interesse para os usuários;</li>
                <li>determinar a eficácia das nossas campanhas promocionais, para que possamos adaptar as nossas campanhas às necessidades e interesses dos nossos usuários.</li>
            </ul>
            <p className={pStyle}><strong>d) Realizaremos estas atividades para gerir a nossa relação contratual, para cumprir uma obrigação legal e/ou porque temos um interesse legítimo.</strong></p>
            <p className={pStyle}><strong>e) Análise de Informações Pessoais para fornecer Serviços personalizados.</strong></p>
            <ul className="md:text-18 tm:text-15 text-black pb-18 list-disc">
                <li>compreendê-lo melhor para que possamos personalizar as nossas interações e fornecer informações e/ou ofertas adaptadas aos seus interesses;</li>
                <li>entender melhor as suas preferências para que possamos fornecer conteúdo através do Serviço que acreditamos ser relevante e interessante para você.</li>
            </ul>
            <p className={pStyle}>Forneceremos Serviços personalizados mediante o seu consentimento ou porque temos um interesse legítimo.</p>
            <p className={pStyle}>Também divulgamos informações coletadas através do Serviço:</p>
            <ul className="md:text-18 tm:text-15 text-black pb-18 list-disc">
                <li>para nossas outras verticais de negócios, as quais podem ser acessadas em <Link href="https://adventures.inc"><a  target="_blank" className="hover:underline text-bold" rel="noreferrer">https://www.adventures.inc</a></Link>;</li>
                <li>para nossos parceiros externos com os quais atuamos para a execução conjunta deste serviço;</li>
                <li>para nossos prestadores de serviços externos que prestam serviços, tais como alojamento e moderação de website, alojamento de aplicativo móvel, análise de dados, processamento de pagamentos, atendimento de pedidos, fornecimento de infraestrutura, serviços de TI, atendimento ao cliente, serviços de entrega de e-mail e mala direta, auditorias e outros serviços, a fim de lhes permitir prestar os serviços; e</li>
                <li>conforme permitido por lei, para terceiros na eventualidade de uma reorganização, fusão, venda, joint venture, cessão, transferência ou outra alienação da totalidade ou parte de nossa empresa, ativos ou ações (incluindo no âmbito de qualquer processo de insolvência ou procedimentos similares).</li>
            </ul>
            <p className={pStyle}>Adicionalmente, podemos utilizar e divulgar informações conforme considerarmos necessário ou apropriado: (a) a fim de cumprir qualquer processo jurídico ou lei aplicável, que poderá incluir leis fora do seu país de residência; (b) conforme permitido pela lei aplicável para responder a pedidos de autoridades públicas e estatais, que podem incluir autoridades fora do seu país de residência; (c) para implementar os nossos termos e condições; e (d) para proteger os nossos direitos, privacidade, segurança ou propriedade e/ou os direitos, segurança ou propriedade das nossas afiliadas, suas ou de outros.  </p>
            <p className={pStyle}>Podemos também utilizar e divulgar as suas informações de outras formas, depois de obtermos o seu consentimento para tal.</p>
            <p className={pStyle}>Adicionalmente, quando permitido pela lei aplicável, podemos utilizar e divulgar informações que não estejam sob a forma de informações pessoais identificáveis, para qualquer fim. Se combinarmos informações que não estão sob a forma de informações pessoais identificáveis com informações identificáveis (como por exemplo, combinar o seu nome com a localização geográfica), trataremos as informações combinadas como informações pessoais.</p>
            <h3 className="text-black md:text-26 tm:text-18 font-bold py-38 uppercase">4. Como acessar, modificar ou eliminar as suas informações pessoais</h3>
            <p className={pStyle}>Se pretender rever, corrigir, atualizar, limitar ou eliminar os seus dados pessoais, ou se pretender solicitar uma cópia eletrônica deles para as transmitir para outra empresa (na medida em que estes direitos lhe sejam conferidos pela lei aplicável), entre em contato conosco através do formulário.</p>
            <p className={pStyle}>Responderemos ao seu pedido assim que possível, no prazo máximo estabelecido pela Lei, a partir da recepção do pedido. Se determinadas circunstâncias causarem algum atraso na nossa resposta, iremos notificá-lo e indicaremos a data na qual irá receber a nossa resposta.</p>
            <h3 className="text-black md:text-26 tm:text-18 font-bold py-38 uppercase">5. Transferência internacional</h3>
            <p className={pStyle}>As suas informações pessoais podem ser armazenadas e processadas em qualquer país onde temos instalações ou prestadores de serviço e, ao utilizar o nosso Serviço ou ao dar-nos o seu consentimento (quando exigido por lei), as suas informações podem ser transferidas para países fora do seu país de residência. Implementamos medidas contratuais apropriadas e outras medidas para proteger informações pessoais quando da transferência para as nossas outras verticais de negócio, ou terceiros em outros países.</p>
            <h3 className="text-black md:text-26 tm:text-18 font-bold py-38 uppercase">6. Segurança</h3>
            <p className={pStyle}>Procuramos utilizar medidas organizacionais, técnicas e administrativas desenvolvidas para proteger os seus dados pessoais sob o nosso controle.  Infelizmente, não é possível garantir que uma transmissão de dados pela Internet ou sistema de armazenamento de dados seja 100% segura. </p>
            <p className={pStyle}>Se tiver razões para acreditar que a sua interação conosco já não é segura (por exemplo, se acreditar que a segurança de uma conta que tem conosco foi comprometida), notifique-nos imediatamente sobre a existência do problema, através dos canais abaixo descritos.</p>
            <h3 className="text-black md:text-26 tm:text-18 font-bold py-38 uppercase">7. Período de retenção</h3>
            <p className={pStyle}>Mantemos os seus dados pessoais durante o período necessário ou permitido em função das finalidades para as quais foram obtidas.  Os critérios utilizados para determinar os períodos de retenção incluem: (i) o período durante o qual temos uma relação com você e lhe prestamos serviço; (ii) se existe uma obrigação legal à qual estamos sujeitos; e (iii) se a retenção é aconselhável em função de algum fato jurídico, como por exemplo, prescrição.</p>
            <p className={pStyle}>A lista acima não é taxativa, mas sim exemplificativo. Os dados pessoais poderão ser armazenados por outros motivos, e por maior tempo, baseando sempre na legislação.</p>
            <h3 className="text-black md:text-26 tm:text-18 font-bold py-38 uppercase">Contate-nos</h3>
            <p className={pStyle}>A Avellar Media Consultoria Publicidade e Marketing LTDA. (Adventures) está situada em Rua Rua Hélios Seelinger, n° 155 - loj. A, RIo de Janeiro/RJ, CEP 22.640-040, e é a empresa responsável pela coleta, utilização e divulgação de informações pessoais ao sob esta Política de Privacidade.</p>
            <p className={pStyle}>Se tiver dúvidas acerca desta Política de Privacidade, contacte-nos através do seguinte contato: <Link href="mailto:juridico@adventures.inc"><a className="hover:undeline text-bold">juridico@adventures.inc</a></Link>.</p>
            <h3 className="text-black md:text-26 tm:text-18 font-bold py-38 uppercase">RECLAMAÇÃO JUNTO DE UMA ENTIDADE REGULADORA
</h3>
            <p className={pStyle}>Você tem o direito de apresentar uma reclamação junto à autoridade competente. Por favor, entre em contato conosco através do contato acima, se você precisar das informações de contato dessas autoridades.</p>
        </ContainerParagraph>
        </>
    )
}

export default TemplatePolitica
