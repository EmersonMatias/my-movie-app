import styled from "styled-components"
import iconCopyright from "../img/iconCopyright.svg"


export default function Footer(){
    return(
        <Container>
            <p>Copyright 2022 Emerson Matthias.</p> <img src={iconCopyright}/><p>Todos os direitos reservados</p>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    margin-top: 120px;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255,0.1);
    color: #FFFFFF;

    img{
        margin: 0 15px;
        width: 30px;
        height: 20px;
    }
`