import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3/"
const API_KEY = "a4dff07ca687866e825f0a03e0d23276"
const BASE_URL_DISCOVER = `${BASE_URL}discover/movie?api_key=${API_KEY}&language=pt-BR&page=1&with_genres=`
const BASE_URL_TRANDING = `${BASE_URL}trending/all/day?api_key=${API_KEY}&language=pt-BR&page=1`
const BASE_URL_NOWPLAYING = `${BASE_URL}movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=1`
const BASE_URL_IMG = `https://image.tmdb.org/t/p/original`
const randomNumber = Math.floor(Math.random() * 20)

export async function requests() {
    let listMovies = {}

    try {
        listMovies = {
            HomeScreen:
                [
                    { title: "Popular Movie", items: await (await axios.get(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)).data.results), margin: -150 },
                    { title: "Popular TV Show", items: await (await axios.get(`${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)).data.results, margin: 120 },
                    { title: "Top Rated TV Show", items: await (await axios.get(`${BASE_URL}tv/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`)).data.results, margin: 120 },
                    { title: "Upcoming Movie", items: await (await axios.get(`${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=pt-BR`)).data.results, margin: 120 }
                ],
            MoviesScreen:
                [
                    { title: "Ação", items: await (await axios.get(`${BASE_URL_DISCOVER}28`)).data.results, margin: 0 },
                    { title: "Aventura", items: await (await axios.get(`${BASE_URL_DISCOVER}12`)).data.results, margin: 120 },
                    { title: "Animação", items: await (await axios.get(`${BASE_URL_DISCOVER}16`)).data.results, margin: 120 },
                    { title: "Comédia", items: await (await axios.get(`${BASE_URL_DISCOVER}35`)).data.results, margin: 120 },
                    { title: "Drama", items: await (await axios.get(`${BASE_URL_DISCOVER}18`)).data.results, margin: 120 },
                    { title: "Horror", items: await (await axios.get(`${BASE_URL_DISCOVER}27`)).data.results, margin: 120 },
                    { title: "Romance", items: await (await axios.get(`${BASE_URL_DISCOVER}10749`)).data.results, margin: 120 },
                    { title: "Fantasia", items: await (await axios.get(`${BASE_URL_DISCOVER}14`)).data.results, margin: 120 }
                ],
            HeroSectionHome:
            {
                TrendingMovie: await (await axios.get(`${BASE_URL_TRANDING}`)).data.results[randomNumber],
                Background: `${BASE_URL_IMG}${await (await axios.get(`${BASE_URL_TRANDING}`)).data.results[randomNumber].backdrop_path}`,
                Poster: `${BASE_URL_IMG}${await (await axios.get(`${BASE_URL_TRANDING}`)).data.results[randomNumber].poster_path}`
            },
            HeroSectionMovies: 
            {
                NowPlaying: await (await axios.get(`${BASE_URL_NOWPLAYING}`)).data.results[randomNumber],
                Background: `${BASE_URL_IMG}${await (await axios.get(`${BASE_URL_NOWPLAYING}`)).data.results[randomNumber].backdrop_path}`,
                Poster: `${BASE_URL_IMG}${await (await axios.get(`${BASE_URL_NOWPLAYING}`)).data.results[randomNumber].poster_path}`
            }
        }
    } catch (error) {
        console.log(error)
    }




    return listMovies
}