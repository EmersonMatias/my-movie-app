import styled from "styled-components"
import Footer from "../../components/Footer"
import HeroSection from "./HeroSection"
import ScrollScreen from "./ScrollScreen"

export default function Home() {
    return (
        <Container>
            <HeroSection />

            <ScrollScreen title={"Popular Movie"} screen={"movie"} type={"popular"} margin={-150} />
            <ScrollScreen title={"Popular Tv Show"} screen={"tv"} type={"popular"} margin={120} />
            <ScrollScreen title={"Top Rated Tv Show"} screen={"tv"} type={"top_rated"} margin={120} />
            <ScrollScreen title={"Upcoming Movie"} screen={"movie"} type={"upcoming"} margin={120} />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    background-color: #000000;
    width: 100%;
    font-size: 50px;
    overflow: hidden;

`