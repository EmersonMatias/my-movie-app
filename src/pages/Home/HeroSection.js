import styled from "styled-components"
import iconStar from "../../img/iconStar.svg"
import iconPlus from "../../img/iconPlus.svg"
import { useContext, useEffect, useState } from "react"
import { MyContext } from "../../context/MyContext"
import axios from "axios"

export default function HeroSection() {
    const { API_KEY } = useContext(MyContext)
    const [listTrending, setListTrending] = useState([])

    const [numberArray, setNumberArray] = useState()
    const filmSelected = listTrending[numberArray]
    const [listCast, setListCast] = useState([])
    let filmId = filmSelected?.id
    const backgroundPage = `https://image.tmdb.org/t/p/original/${filmSelected?.backdrop_path}`

 
    useEffect(() => {

        setNumberArray(Math.floor(Math.random() * 20))

    }, [])

    function title() {
        if (filmSelected?.title === undefined) {
            return filmSelected?.name
        } else {
            return filmSelected?.title
        }
    }

    function cast() {
        if (listCast.length === 0) {
            return false
        } else {
            return true
        }
    }

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/trending/all/day${API_KEY}&language=pt-BR&page=1`)
            .then((res) => (setListTrending(res.data.results)))
            .catch((error) => (console.log(error.data)))

        axios.get(`https://api.themoviedb.org/3/movie/${filmId}/credits${API_KEY}&language=pt-BR&page=1`)
            .then((res) => (setListCast(res.data.cast)))
            .catch((error) => (console.log(error.data)))

    }, [filmId])

    return (
        <HeroSectionContainer cast={() => cast()} backgroundPage={backgroundPage}>
            <div className="opacity">
                <div className="contentHeroSection">
                    <img className="poster" alt="Poster" src={`https://image.tmdb.org/t/p/original/${filmSelected?.poster_path}`} />
                    <div className="textHeroSection">
                        <h2>{title()}</h2>
                        <div className="buttonsHeroSection">
                            <button>QUERO ASSISTIR <img alt="Icone Mais" src={iconPlus} /></button>
                            <button>FAVORITO <img alt="Icone Estrela" src={iconStar} /></button>
                        </div>
                        <p className="description">{filmSelected?.overview}
                        </p>
                        <p className="cast">Elenco: {listCast[0]?.name}, {listCast[1]?.name}, {listCast[2]?.name}</p>
           
                    </div>
                </div>
            </div>
        </HeroSectionContainer>
    )
}

const HeroSectionContainer = styled.section`
    width: 100%;
    height: 100vh;
    background-color: aliceblue;
    background-image: url(${props => props.backgroundPage});
    background-size: cover;
    display: flex;

    .opacity{
        background-color: rgba(0,0,0,0.5);
        width: 100%;
    }

    .contentHeroSection{
        display: flex;
        height: 800px;
        margin-top: 140px;
        margin-left: 260px;
    }

    .textHeroSection{
        margin-top: 24px;
    }

    .poster{
        width: 360px;
        height: 516px;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
        margin-right: 80px;
    }

    h2{
        font-size: 64px;
        font-weight: 900;
        margin-bottom: 32px;
        color: #FFFFFF;
        max-width: 800px;
    }

    .buttonsHeroSection{
        display: flex;

        button{
            padding: 16px 32px;
            border-radius: 30px;
            background: linear-gradient(90deg, hsla(42, 93%, 57%, 0.8) 0%, hsla(358, 78%, 62%, 0.8) 100%);
            border: none;
            color: white;
            font-size: 16px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 32px;
            margin-bottom: 32px;

            img{
                width: 24px;
                height: 24px;
                color: #FFFFFF;
                margin-left: 16px;
            }
        }
    }

    .description, .cast, .genre{
        max-width: 550px;
        font-size: 18px;
        font-weight: 400;
        color: #FFFFFF;
        margin-bottom: 40px;
    }

    .cast{
        display: ${props => props.cast() ? "" : "none"};
    }
`