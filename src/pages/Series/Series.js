import { useContext } from "react"
import styled from "styled-components"
import Footer from "../../components/Footer"
import HeroSection from "../../components/HeroSection"
import ScrollScreen from "../../components/ScrollScreen"
import { MyContext } from "../../context/MyContext"

export function Series() {
    const { allItems, itemsSeriesScreen } = useContext(MyContext)
    const HeroSectionSeries = allItems?.HeroSectionSeries

    return (
        <Container>
            <HeroSection
                background={HeroSectionSeries?.Background}
                poster={HeroSectionSeries?.Poster}
                filmTtile={HeroSectionSeries?.OnTheAir?.title}
                name={HeroSectionSeries?.OnTheAir?.name}
                overview={HeroSectionSeries?.OnTheAir?.overview}
                height={"75vh"}
                stateButtons={false}
            />

            {itemsSeriesScreen?.map((datas) => (
                <ScrollScreen title={datas?.title} margin={datas?.margin} listFilms={datas?.items} />
            ))}

            <Footer />

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    background: black;
    overflow: hidden;
`
