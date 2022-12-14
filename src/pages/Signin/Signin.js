import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import GeneralInput from "../../components/GeneralInput"
import { MyContext } from "../../context/MyContext"


export default function Signin() {
    const { allItems } = useContext(MyContext)
    const backgroundPage = allItems?.HeroSectionHome.Background
    const [dataUser, setDataUser] = useState({email: "", password: ""})
    const navigate = useNavigate()
    console.log(dataUser)

    return (
        <Container backgroundPage={backgroundPage}>

            <div>
                <form>
                    <GeneralInput text={"email"} type={"email"} onchange={(e) => {setDataUser({...dataUser, email: e.target.value})}} value={dataUser.email}/>
                    <GeneralInput text={"senha"} type={"password"} onchange={(e) => {setDataUser({...dataUser, password: e.target.value})}} value={dataUser.password}/>
                    <button>
                        Entrar
                    </button>
                </form>
                <p onClick={() => navigate("/cadastrar")}>Ainda não tem conta? Cadastre-se aqui!</p>
            </div>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.backgroundPage});
    display: flex;
    background-size: cover;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
  
 div{
    width: 50%;
    height: 25vw;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    button{
        width: 12vw;
        height: 3vw;
        border-radius: 24px;
        background-color: rgb(0,0,0, 80%);
        color: #FFFFFF;
        font-size: 1.1vw;
        font-weight: bold;
    }

    p{
        color: #FFFFFF;
        font-size: 0.8vw;
        font-weight: bold;
        margin-top: 24px;
    }
  
 }

`