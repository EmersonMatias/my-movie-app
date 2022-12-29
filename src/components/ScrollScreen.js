import { useState } from "react"
import styled from "styled-components"
import iconFire from "../img/iconFire.svg"
import iconArrowRight from "../img/iconArrowRight.svg"
import iconArrowLeft from "../img/iconArrowLeft.svg"
import { useNavigate } from "react-router-dom"

export default function ScrollScreen({ title, margin, listFilms }) {
    const [scrollCoordenates, setScrollCoordentes] = useState(0)
    const navigate = useNavigate()
    console.log(listFilms)

    //Função leftScroll
    function leftScroll() {
        if (scrollCoordenates < 0) {
            setScrollCoordentes(scrollCoordenates + 700)
        } else {
            setScrollCoordentes(0)
        }
    }

    //Função rightScroll
    function rightScroll() {
        if (scrollCoordenates > -9600) {
            setScrollCoordentes(scrollCoordenates - 700)
        } else {
            setScrollCoordentes(-9600)
        }
    }

    return (
        <PopularContainer scrollCoordenates={scrollCoordenates} margin={margin}>
            <h3 className="title">{title}<img className="iconFire" src={iconFire} alt="Icone" /></h3>

            <div className="scrollScreenContainer">
                <div className="scrollScreen">
                    {listFilms?.map((object) => (
                        <img
                            src={`https://image.tmdb.org/t/p/original/${object?.poster_path}`}
                            alt="Capa filme"
                            onClick={() => navigate(`/filmes/${object.id}`)}
                        />
                    ))}
                </div>
            </div>

            <img onClick={leftScroll} className="arrow left" src={iconArrowLeft} alt="Icone Seta"></img>
            <img onClick={rightScroll} className="arrow right" src={iconArrowRight} alt="Icone Seta"></img>
        </PopularContainer>
    )
}

const PopularContainer = styled.section`
    margin-left: 88px;
    margin-top: ${props => props.margin}px;
    position: relative;
    font-family: 'Poppins', sans-serif;

    .title{
        font-size: 40px;
        font-weight: bold;
        background: -webkit-linear-gradient(90deg, hsla(52, 82%, 52%, 1) 0%, hsla(1, 92%, 47%, 1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
    }

    .iconFire{
        margin-left: 16px;
    }
  
    .left{
        left: 16px;
        top: 150px;
    }

    .right{
        right: 16px;
        top: 150px;
    }

    .scrollScreen img:hover{
        cursor: pointer;
    }
   
    .title img{
        width: 40px;
    }

    .scrollScreenContainer{
        overflow-x: hidden;
    }

    .scrollScreen{
        display: flex;
        margin-left: ${props => props.scrollCoordenates}px;
        transition: all 0.6s ease-in-out;
    }

    .scrollScreen img{
        width: 250px;
        margin-right: 32px;
        border-radius: 8px;
    }

    .arrow{
        width: 50px;
        height: 200px;
        background-color: rgb(0,0,0,0.5);
        position: absolute;
        opacity: 0;
    }

    &&:hover .arrow{
        opacity: 1;
        transition: all 0.3s ease-in-out;
    }
`