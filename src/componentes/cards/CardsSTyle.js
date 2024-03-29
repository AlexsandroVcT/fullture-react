import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-content: center;
height: 100%;
widht: 100%;
border: 1px solid #4B0082;
border-radius: 5px;
text-decoration: none;
:hover{
    cursor: pointer;
    border: 1px solid #e50914;
    
}
.infoContainer{
    width: 90%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    height: 20%;
    align-selfe: center;
    font-size: 2vh;
    color: #FFD700;
    padding: 5px;
    text-decoration: none;
}
img{
    width: 100%;
    height: 80%;
}
`


export const Grid = styled(Link)`
display: grid;
justify-content: center;
align-items: center;
min-height: 20vh;
padding: 10vh 0;
width: 80%;
gap: 3vw;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
text-decoration: none;


`