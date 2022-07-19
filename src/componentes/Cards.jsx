import { useEffect, useState } from "react"
import { Pegarfilmes } from "../assets/api/api";

export function Cards() {
    const [filmes, setFilmes] = useState();

    useEffect(() => {
        Pegarfilmes(setFilmes)
    }, [])

    return (
        <div>{!filmes ? "loading" : <>
            {filmes.map((filme) => {
                return (
                    <>
                        <p>{filme.title}</p>
                        <p>{filme.vote_averege}</p>
                    </>
                )


            })}

        </>}
        </div>
    )

}