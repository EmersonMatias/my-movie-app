import { useContext } from "react"
import styled from "styled-components"
import { MyContext } from "../../context/MyContext"
import HeroSection from "../../components/HeroSection"
import ScrollScreen from "../../components/ScrollScreen"
import Foooter from "../../components/Foooter"



export default function Movies() {
    const { itemsMoviesScreen, allItems } = useContext(MyContext)
    const HeroSectionMovies = allItems?.HeroSectionMovies


    console.log(itemsMoviesScreen)


    return (
        <Container>
            <HeroSection
                background={HeroSectionMovies?.Background}
                poster={HeroSectionMovies?.Poster}
                filmTitle={HeroSectionMovies?.NowPlaying?.title}
                name={HeroSectionMovies?.NowPlaying?.name}
                overview={HeroSectionMovies?.NowPlaying.overview}
                height={"100vh"}
                stateButtons={false}
            />

            {itemsMoviesScreen?.map((datas) => (
                <ScrollScreen title={datas?.title} margin={datas?.margin} listFilms={datas?.items} />
            ))}

            <Foooter />
        </Container>)
}

const Container = styled.div`
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-size: 50px;
    background: #101216;
    overflow: hidden;
`

