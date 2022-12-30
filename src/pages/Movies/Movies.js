import { useContext} from "react"
import styled from "styled-components"
import Footer from "../../components/Footer"
import { MyContext } from "../../context/MyContext"
import HeroSection from "../../components/HeroSection"
import ScrollScreen from "../../components/ScrollScreen"



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
                <ScrollScreen title={datas.title} margin={datas.margin} listFilms={datas.items} session={"filmes"}/>
            ))}

            <Footer />
        </Container>)
}

const Container = styled.div`
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    background: #101216;
    overflow: hidden;
`

