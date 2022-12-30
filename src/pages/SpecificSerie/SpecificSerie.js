import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { AboutFilm } from "../SpecificFilm/AboutFilm"
import { CastScroll } from "../SpecificFilm/CastScroll"
import SpecificFilm_HeroSection from "../SpecificFilm/SpecificFilm_HeroSection"
import SubContent from "../SpecificFilm/SubContent"
import { requestsSerie } from "./requestsSeries"



export default function SpecificSerie() {
    const { id } = useParams()
    const [data, setData] = useState()
    const [numberSerieBackground, setNumberSerieBackground] = useState()
    const [numberSeriePoster, setNumberSeriePoster] = useState()
    const background = `https://www.themoviedb.org/t/p/original${data?.backgrounds[numberSerieBackground]?.file_path}`
    const poster = `https://www.themoviedb.org/t/p/original${data?.backgrounds[numberSeriePoster]?.file_path}`
    console.log(data)
    console.log(id)

    useEffect(() => {
        const getRequest = async () => {
            const dataSerie = await requestsSerie(id)


            setNumberSerieBackground(Math.floor(Math.random() * (dataSerie?.backgrounds?.length - 1)))
            setNumberSeriePoster(Math.floor(Math.random() * (dataSerie?.backgrounds?.length - 1)))
            setData(dataSerie)
        }

        getRequest()
    }, [])


    return (
        <Container>
            <Header />
            <SpecificFilm_HeroSection background={background} poster={poster} title={data?.data.title} name={data?.data.name} rate={data?.data.vote_average} homepage={data?.data.homepage}/>
            <SubContent runtime={data?.data?.number_of_seasons} year={data?.data?.first_air_date.split("-")[0]} genres={data?.data?.genres[0].name} providers={data?.providers} session={"serie"}/>
            <AboutFilm overview={data?.data?.overview} trailers={data?.trailers} trailerOpcional={data?.trailers[0]?.key} />

            <CastScroll filmId={id} session={"serie"}/>
            <Footer />
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
