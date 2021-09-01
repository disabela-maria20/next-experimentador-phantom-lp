import ReactPlayer from "react-player/youtube";
import Paragraph from "../../atom/Paragraph/Paragraph";
import Title from "../../atom/Title/Title";

function Introduction() {
    return (
        <div>
          <section className="bg-introduction bg-center bg-cover tm:py-38 md:py-136 h-full grid grid-cols-1">
            <div className="tm:container mx-auto grid grid-cols-2 px-15">
                <div className="">
                    <Title titulo="O aroma do futuro" extraclass="text-black pb-38" />
                    <Paragraph paragrafo="Phantom, a nova fragrância masculina de Paco Rabanne. A essência da autoconfiança movida por energias positivas. Uma fragrância aromática futurista criada a partir do choque entre o trabalho artesanal de luxo e as novas tecnologias. Um aroma ousado, com notas cremosas e viciantes de lavanda, e uma energizante fusão de limão e baunilha, amadeirada e sexy." extraclass="text-black pb-55"/>
                    <div className="react-player">
                    <ReactPlayer url="https://www.youtube.com/watch?v=NjDTuucnvSI" height="100%" width="100%" />
                    </div>
                </div>
                <div className="">

                </div>
            </div>
          </section>
        </div>
    )
}

export default Introduction
