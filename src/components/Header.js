import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import iconUserFill from "../img/iconUserFill.svg"


export default function Header() {
    const navigate = useNavigate()


    return (
        <HeaderContainer>
            <div className="leftSide">
                <h1 onClick={() => navigate("/")}>MyMovie</h1>
                <h6 onClick={() => navigate("/")}>Início</h6>
                <h6 onClick={() =>  navigate("/filmes")}>Filmes</h6>
                <h6 onClick={() => navigate("/series")}>Série</h6>
            </div>

            <div className="rightSide">
                <input placeholder="Pesquisar"></input>
                <h6 className="login">Login</h6>
                <img className="user" alt="icon User"src={iconUserFill} />
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 8px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    font-family: 'Poppins', sans-serif;
    

    .leftSide, .rightSide{
        display: flex;
        align-items: center;
    }
    
    h1{
        font-size: 35px;
        font-weight: bold;
        line-height: 54px;
        background: -webkit-linear-gradient(90deg, hsla(52, 82%, 52%, 1) 0%, hsla(1, 92%, 47%, 1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0 4.1vw;
    }

    h6{
        font-size: 16px;
        font-weight: bold;
        color: #FFFFFF;
        margin-right: 36px;
        cursor: pointer;
    }

    input{
        background-color: rgba(196, 196, 196, 0.7);
        border: none;
        border-radius: 16px;
        width: 20vw;
        height: 35px;
        padding-left: 16px;
        font-size: 16px;
        margin-right: 32px;
    }

    .login{
        margin-right: 0;
    }
    
    img{
        width: 40px;
        height: 40px;
        margin: 0 4.1vw 0 32px;
    }
`