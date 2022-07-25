import { Footer } from "../../componentes/Footer";
import { Cards } from "../../componentes/Cards";
import { useEffect, useState } from "react";
import { Pai, Titulo } from "./InicialStyle";



function Inicial() {
    const [imagens, setImagens] = useState("Div da imagem");
    const [cor, setCor] = useState("#1316cb")

    useEffect(() => {
        setImagens("Novo valor")
    }, [])

    const pageName = "Home"

    return (
        //Sempre utilizar a div Pai
        <Pai color={`${cor}`}> {/** passando cor como props*/}
            <div>{imagens}</div>
            <div>
                <h2>Filmes Populares</h2>
                <h2>Filmes Populares</h2>
                <h2>Filmes Populares</h2>
                {/* <Titulo>Filmes Populares</Titulo> */}
                <Cards />
            </div>
            <Footer texto={`LexFlix 2002 Todos os direitos resevados. | ${pageName}`} />
        </Pai>
    )
};

export default Inicial;