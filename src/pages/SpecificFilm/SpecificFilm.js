import styled from "styled-components"

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import SpecificFilm_HeroSection from "./SpecificFilm_HeroSection"
import { CastScroll } from "./CastScroll"
import { request } from "./requestsFilm"
import SubContent from "./SubContent"


export default function SpecificFilm() {
    const { id } = useParams()
    const [data, setData] = useState()
    const randomNumber_background = Math.floor(Math.random() * (data?.backgrounds?.length - 1))
    const randomNumber_poster = Math.floor(Math.random() * (data?.backgrounds?.length - 1))
    const background = `https://www.themoviedb.org/t/p/original${data?.backgrounds[randomNumber_background]?.file_path}`
    const poster = `https://www.themoviedb.org/t/p/original${data?.backgrounds[randomNumber_poster]?.file_path}`

    console.log(data?.backgrounds?.length)
    console.log((data))

    useEffect(() => {
        const getRequest = async (id) => {
            const a = await request(id)

            setData(a)
        }
        getRequest(id)

    }, [])

    return (
        <Container>
            <SpecificFilm_HeroSection background={background} poster={poster} />

            <SubContent runtime={data?.data?.runtime} year={data?.data?.release_date.split("-")[0]} genres={data?.data?.genres[0].name}/>

            <div className="aboutMovie">
                <div>

                </div>
            </div>



        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    background: #101216;
    overflow: hidden;
`


