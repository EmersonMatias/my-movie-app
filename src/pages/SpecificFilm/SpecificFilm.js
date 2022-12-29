import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import SpecificFilmHeroSection from "./SpecificFilm_HeroSection"
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

    console.log(data)


    useEffect(() => {

        const getRequest = async () => {
            const a = await request(id)

            setData(a)
        }
        getRequest(id)

    }, [])

    return (
        <Container>
            <SpecificFilmHeroSection background={background} poster={poster} title={data?.data.title} rate={data?.data.vote_average}/>

            <SubContent runtime={data?.data?.runtime} year={data?.data?.release_date.split("-")[0]} genres={data?.data?.genres[0].name} providers={data?.providers}/>

            <div className="aboutMovie">
                <div>

                </div>
            </div>

            <CastScroll filmId={id}/>


        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 35px;
    background: #101216;
    overflow: hidden;
`


