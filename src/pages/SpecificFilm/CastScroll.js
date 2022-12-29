import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import { castFilm } from "./requestsFilm"
import iconArrowLeft from "../../img/iconArrowLeft.svg"
import iconArrowRigth from "../../img/iconArrowRight.svg"

export function CastScroll({ filmId }) {
    const [cast, setCast] = useState()
    const [scrollCoordenates, setScrollCoordenates]= useState(0)
    console.log(cast?.length*16.4)
    console.log(cast)

    function limitScroll(){
        if(scrollCoordenates > 0){
            setScrollCoordenates(0)
        }
        if(scrollCoordenates < -(cast?.length*16)){
           
        }
    }
    limitScroll()

    useEffect(() => {
        const getCast = async () => {
            const dataCast = await castFilm(filmId)
            console.log(dataCast)

            setCast(dataCast.peoples)
        }

        getCast()
    }, [])

    function leftScroll() {
        if (scrollCoordenates < 0) {
            setScrollCoordenates(scrollCoordenates + 35)
        } else {
            setScrollCoordenates(0)
        }
    }

    //Função rightScroll
    function rightScroll() {
        if (scrollCoordenates > -(cast.length*17)) {
            setScrollCoordenates(scrollCoordenates - 35)
        } else {
            setScrollCoordenates(-cast.length*17)
        }
    }

    return (
        <Container scrollCoordenates={scrollCoordenates}>

            <h1>Elenco</h1>
            <div className="castScrollContainer">
                {cast?.map((person) => (
                    <div className="castPeople">
                        <img className="person" src={`https://www.themoviedb.org/t/p/original${person?.profile_path}`} alt={person?.name} />
                        <p className="realName">{person?.name}</p>
                        <p>{person?.character}</p>
                    </div>
                ))}
            </div>

            <img src={iconArrowLeft} className="leftArrow arrow" onClick={() => leftScroll()}/>
            <img src={iconArrowRigth} className="rightArrow arrow" onClick={() => rightScroll()}/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 4vw;
    margin-bottom: 160px;
    position: relative;
    color: #FFFFFF;

    h1{
        font-size: 2vw;
        font-weight: bold;
        margin-bottom: 40px;
    }

    .castScrollContainer{
        display: flex;
        overflow-x: hidden;
        overflow-y: hidden;
        margin-left: ${props => props.scrollCoordenates}vw;
        transition: all 0.6s ease-in-out;
    }
    .castPeople{
        max-width: 16vw;
        max-height: 25vw;
        font-size: 1vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 2vw;

        p{
            margin-top: 8px;
        }

        .realName{
            font-weight: bold;
        }

        .person{
            width: 16vw;
            height: 21vw;
            border-radius: 16px;
        }
    }

    .leftArrow, .rightArrow{
        width: 50px;
        height: 10vw;
        background-color: rgb(0,0,0,0.5);
        position: absolute;
        opacity: 0;
    }

    .rightArrow{
        right: 2.6vw;
        top: 11vw;
    }

    .leftArrow{
        left: 5.3vw;
        top: 11vw;
    }

    &&:hover .arrow{
        opacity: 1;
        transition: all 0.3s ease-in-out;
        }
`
