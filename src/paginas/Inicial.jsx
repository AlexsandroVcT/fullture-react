import { Footer } from "../componentes/Footer";
import { Cards } from "../componentes/Cards";
import { useEffect, useState } from "react";

function Inicial() {
    const [imagens, setImagens] = useState("Div da imagem");

    useEffect(() => {
        setTimeout(() => setImagens("Novo valor"), 3000)
    }, [])

    return (
        //Sempre utilizar a div Pai
        <div>
            <div>{imagens}</div>
            <div>
                <h2>Filmes Populares</h2>
                <Cards />
            </div>
            <Footer texto="LexFlix 2002 Todos os direitos resevados" />
        </div>
    )
};

export default Inicial;