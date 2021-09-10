import Link from "next/link"

function Footer() {
        return (
        <footer className="bg-black py-55">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 h-full justify-items-center items-center place-content-center">
                    <div>
                        <img src="/img/logo-paco.png" alt="Paco Rabanne" width="160px"/>
                    </div>
                    <div>
                        <img src="/img/logo-experimentador.png" alt="Experimentador" width="160px"/>
                    </div>
                    <div>
                        <img src="/img/logo-adventures.png" alt="Adventures" width="160px"/>
                    </div>
                </div>
                <div className="grid grid-cols-1 pt-38">
                    <p className="text-13 text-white text-center"><Link href="/pacorabanne/politica-de-privacidade"><a className="hover:underline hover:text-purple">Política de Privacidade</a></Link></p>
                    <p className="text-13 text-white text-center"><Link href="/pacorabanne/perguntas-frequentes"><a className="hover:underline hover:text-purple">Perguntas Frequentes</a></Link></p> <br /><span className="text-13 text-white text-center">Todos direitos reservados a paco rabanne © em parceira com experimentador</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
