import styled from "styled-components"
import Footer from "../../components/Footer"
import ScrollScreen from "../Home/ScrollScreen"
import HeroSectionMovies from "./HeroSectionMovies"


export default function Movies() {

    return (
        <Container>
            <HeroSectionMovies />
            <ScrollScreen title={"Ação"} screen={"discover"} type={"movie"} margin={-150} genre={"28"} />
            <ScrollScreen title={"Aventura"} screen={"discover"} type={"movie"} margin={120} genre={"12"} />
            <ScrollScreen title={"Animação"} screen={"discover"} type={"movie"} margin={120} genre={"16"} />
            <ScrollScreen title={"Comédia"} screen={"discover"} type={"movie"} margin={120} genre={"35"} />
            <ScrollScreen title={"Drama"} screen={"discover"} type={"movie"} margin={120} genre={"18"} />
            <ScrollScreen title={"Horror"} screen={"discover"} type={"movie"} margin={120} genre={"27"} />
            <ScrollScreen title={"Drama"} screen={"discover"} type={"movie"} margin={120} genre={"10749"} />
            <ScrollScreen title={"Fantasia"} screen={"discover"} type={"movie"} margin={120} genre={"14"} />

            <Footer />
        </Container>)
}

const Container = styled.div`
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    background: #000000;
    overflow: hidden;
`

