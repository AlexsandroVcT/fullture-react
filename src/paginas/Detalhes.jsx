import { Footer } from "../componentes/Footer";
import { Header } from "../componentes/Header";


function Detalhes() {
    const pageName = "Detalhes"
    return (
        <div>
            <Header />
            <main>Div do meio</main>
            <Footer texto={`LexFlix 2002 Todos os direitos resevados. | ${pageName}`} />

        </div>
    )
}

export default Detalhes;

// Para pagina utilizar o export default e o nome da function