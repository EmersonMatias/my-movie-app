import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import SpecificFilmHeroSection from "./SpecificFilm_HeroSection"
import { CastScroll } from "./CastScroll"
import { request } from "./requestsFilm"
import SubContent from "./SubContent"
import { AboutFilm } from "./AboutFilm"
import Footer from "../../components/Foooter"

export default function SpecificFilm() {
    const { id } = useParams()
    const [data, setData] = useState()
    const [randomNumber_background, setNumberBackground] = useState()
    const [randomNumber_poster, setNumberPoster] = useState()
    const background = `https://www.themoviedb.org/t/p/original${data?.backgrounds[randomNumber_background]?.file_path}`
    const poster = `https://www.themoviedb.org/t/p/original${data?.backgrounds[randomNumber_poster]?.file_path}`
    console.log(data)
 

    useEffect(() => {
        const getRequest = async () => {
            const a = await request(id)

            setNumberBackground(Math.floor(Math.random() * (a?.backgrounds?.length - 1)))
            setNumberPoster(Math.floor(Math.random() * (a?.backgrounds?.length - 1)))
            setData(a)
        }
        getRequest(id)

    }, [])

    return (
        <Container>
            <SpecificFilmHeroSection background={background} poster={poster} title={data?.data.title} rate={data?.data.vote_average} homepage={data?.data.homepage}/>

            <SubContent runtime={data?.data?.runtime} year={data?.data?.release_date.split("-")[0]} genres={data?.data?.genres[0].name} providers={data?.providers} session={"filme"} />

            <AboutFilm overview={data?.data?.overview} trailers={data?.trailers} trailerOpcional={data?.trailers[0]?.key} />

            <CastScroll filmId={id} />

            <Footer />

        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    background: #101216;
    overflow: hidden;
    font-family: 'Poppins', sans-serif
`


