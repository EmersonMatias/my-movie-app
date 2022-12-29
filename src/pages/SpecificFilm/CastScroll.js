import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import { castFilm } from "./requestsFilm"

export function CastScroll({filmId}) {
    const [cast, setCast] = useState()
   
    useEffect(() => {
        const getCast = async () => {
            const dataCast = await castFilm(filmId)
            console.log(dataCast)

            setCast(dataCast.peoples)
        }

        getCast()
    }, [])
   
    return (
        <Container>
            {cast?.map((person) => (
                <div className="castPeople">
                <img src={`https://www.themoviedb.org/t/p/original${person?.profile_path}`} alt={person?.name}/>
                <p className="realName">{person?.name}</p>
                <p>{person?.character}</p>
            </div>
            ))}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: greenyellow;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;

    .castPeople{
        max-width: 16vw;
        max-height: 25vw;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        p{
            margin-top: 8px;
        }

        .realName{
            font-weight: bold;
        }
    }

    img{
        width: 16vw;
        height: 21vw;
        margin-left: 30px;
        border-radius: 16px;
    }
`
