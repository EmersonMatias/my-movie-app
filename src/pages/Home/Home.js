import { useContext } from "react"
import styled from "styled-components"
import Footer from "../../components/Foooter"
import { MyContext } from "../../context/MyContext"
import HeroSection from "../../components/HeroSection"
import ScrollScreen from "../../components/ScrollScreen"


export default function Home() {
    const { itemsHomeScreen } = useContext(MyContext)
    const { allItems } = useContext(MyContext)
    const HeroSectionHome = allItems?.HeroSectionHome
    console.log(itemsHomeScreen)

    return (
        <Container>
            <HeroSection
                background={HeroSectionHome?.Background}
                poster={HeroSectionHome?.Poster}
                filmTitle={HeroSectionHome?.TrendingMovie?.title}
                name={HeroSectionHome?.TrendingMovie?.name}
                overview={HeroSectionHome?.TrendingMovie.overview}
                height={"100vh"}
                stateButtons={true}
            />

            {itemsHomeScreen?.map((datas) => (
                <ScrollScreen title={datas?.title} margin={datas?.margin} listFilms={datas?.items} />
          
            ))}

            <Footer />
        </Container>
    )
}

const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    background-color: #101216;
    width: 100%;
    font-size: 50px;
    overflow: hidden;

`