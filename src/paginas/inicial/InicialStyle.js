import styled from "styled-components";

export const Titulo = styled.h2`
    color: blue;
`

export const Pai = styled.div`
    h2{
        color: {props => props.color || "#000"};
    }
    .preto{
        color: black;
    }
`
// export const Titulo = styled.h2`
//     color: blue;
// `
// export const Titulo = styled.h2`
//     color: blue;
// `