import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import GeneralInput from "../../components/GeneralInput"
import { MyContext } from "../../context/MyContext"


export default function Signup() {
    const { allItems } = useContext(MyContext)
    const backgroundPage = allItems?.HeroSectionHome.Background
    const navigate = useNavigate()

    return (
        <Container backgroundPage={backgroundPage}>

            <div>
                <form>
                    <GeneralInput text={"nome"} type={"text"} />
                    <GeneralInput text={"email"} type={"email"} />
                    <GeneralInput text={"senha"} type={"password"} />
                    <GeneralInput text={"confirmação de senha"} type={"password"} />
                    <button>
                        Cadastrar
                    </button>
                    <p onClick={() => {navigate("/login")}}>Já tem conta? Faça login aqui!</p>
                    
                </form>

            </div>


        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.backgroundPage});
    background-size: cover;
    display: flex;
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