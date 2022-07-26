import { Footer } from "../../componentes/Footer";
import { Cards } from "../../componentes/Cards";
import { useEffect, useState } from "react";
import { Pai, Parte1, Parte2 } from "./InicialStyle";



function Inicial() {
    const [imagens, setImagens] = useState("Div da imagem");
    const [cor, setCor] = useState("#1316cb")

    useEffect(() => {
        setImagens("Novo valor")
    }, [])

    const pageName = "Home"

    return (
        //Sempre utilizar a div Pai {div}
        <Pai>

            <div className="imagemInicial">{imagens}</div>
            <Parte1>
                <h2>Filmes Populares</h2>
            </Parte1>

            <Parte2>
                <Cards />
            </Parte2>

            <Footer texto={`LexFlix 2002 Todos os direitos resevados. | ${pageName}`} />

        </Pai>
    )
};

export default Inicial;