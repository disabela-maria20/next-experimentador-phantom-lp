import Title from "../../atom/Title/Title";

function HeaderGeral({children}) {
    return (
        <section className="bg-finalizado py-66">
            <div className="container mx-auto">
                {children}
            </div>
        </section>
    )
}

export default HeaderGeral
