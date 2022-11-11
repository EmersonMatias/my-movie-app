import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { MyContext } from "../../context/MyContext"
import HeroSection from "./HeroSection"
import Popular from "./Popular"



export default function Home() {
    const { API_KEY } = useContext(MyContext)

    const [listUpcoming, setListUpcoming] = useState([]);
    const [listNowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming${API_KEY}&language=pt-BR&page=1`)
            .then((res) => (setListUpcoming(res.data)))
            .catch((error) => (console.log(error.data)))

        axios.get(`https://api.themoviedb.org/3/movie/now_playing${API_KEY}&language=pt-BR&page=1`)
            .then((res) => (setNowPlaying(res.data)))
            .catch((error) => (console.log(error.data)))
    }, [])

    return (
        <Container>
            <Header></Header>
            <HeroSection />
            <Popular title={"Popular Movie"} screen={"movie"} type={"popular"} margin={-150} />
            <Popular title={"Popular Tv Show"} screen={"tv"} type={"popular"} margin={120} />
            <Popular title={"Upcoming Movie"} screen={"movie"} type={"upcoming"} margin={120} />
            <Popular title={"Top Rated Tv Show"} screen={"tv"} type={"top_rated"} margin={120} />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    background-color: black;
    width: 100%;
    font-size: 50px;
    overflow: hidden;

    @media (max-width: 1000px)
{
  display: none;
}
`