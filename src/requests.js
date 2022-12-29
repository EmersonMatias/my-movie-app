import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3/"
const API_KEY = "a4dff07ca687866e825f0a03e0d23276"
const BASE_URL_DISCOVER = `${BASE_URL}discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=`
const BASE_URL_TVDISCOVER = `${BASE_URL}discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=`
const BASE_URL_TRANDING = `${BASE_URL}trending/all/day?api_key=${API_KEY}&language=pt-BR&page=1`
const BASE_URL_NOWPLAYING = `${BASE_URL}movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=1`
const BASE_URL_ONTHEAIR = `${BASE_URL}tv/on_the_air?api_key=${API_KEY}&language=pt-BR&page=1`
const BASE_URL_IMG = `https://image.tmdb.org/t/p/original`
const randomNumber = Math.floor(Math.random() * 20)

export async function requests() {
    let listMovies = {}

    try {
        listMovies = {
            HomeScreen:
                [
                    { title: "Popular Movie", items: await (await axios.get(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=2`)).data.results), margin: -240 },
                    { title: "Popular TV Show", items: await (await axios.get(`${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`)).data.results), margin: 120 },
                    { title: "Top Rated TV Show", items: await (await axios.get(`${BASE_URL}tv/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL}tv/top_rated?api_key=${API_KEY}&language=pt-BR&page=2`)).data.results), margin: 120 },
                    { title: "Upcoming Movie", items: await (await axios.get(`${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=pt-BR`)).data.results.concat(await (await axios.get(`${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=pt-BRpage=3`)).data.results), margin: 120 }
                ],
            MoviesScreen:
                [
                    { title: "Ação", items: await (await axios.get(`${BASE_URL_DISCOVER}28&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL_DISCOVER}28&page=2`)).data.results), margin: -240 },
                    { title: "Aventura", items: await (await axios.get(`${BASE_URL_DISCOVER}12&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL_DISCOVER}12&page=2`)).data.results), margin: 120 },
                    { title: "Animação", items: await (await axios.get(`${BASE_URL_DISCOVER}16&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL_DISCOVER}16&page=2`)).data.results), margin: 120 },
                    { title: "Comédia", items: await (await axios.get(`${BASE_URL_DISCOVER}35&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL_DISCOVER}35&page=2`)).data.results), margin: 120 },
                    { title: "Drama", items: await (await axios.get(`${BASE_URL_DISCOVER}18&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL_DISCOVER}18&page=2`)).data.results), margin: 120 },
                    { title: "Horror", items: await (await axios.get(`${BASE_URL_DISCOVER}27&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL_DISCOVER}27&page=2`)).data.results), margin: 120 },
                    { title: "Romance", items: await (await axios.get(`${BASE_URL_DISCOVER}10749&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL_DISCOVER}10749&page=2`)).data.results), margin: 120 },
                    { title: "Fantasia", items: await (await axios.get(`${BASE_URL_DISCOVER}14&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL_DISCOVER}14&page=2`)).data.results), margin: 120 }
                ],
            SeriesScreen:
            [
                {title:"Ação e Aventura", items: await (await axios.get(`${BASE_URL_TVDISCOVER}10759&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL_TVDISCOVER}10759&page=2`)).data.results), margin:-240},
                {title:"Animação", items: await (await axios.get(`${BASE_URL_TVDISCOVER}16&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL_TVDISCOVER}16&page=2`)).data.results), margin:120},
                {title:"Comédia", items: await (await axios.get(`${BASE_URL_TVDISCOVER}35&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL_TVDISCOVER}35&page=2`)).data.results), margin:120},
                {title:"Drama", items: await (await axios.get(`${BASE_URL_TVDISCOVER}18&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL_TVDISCOVER}18&page=2`)).data.results), margin:120},
                {title:"Crime", items: await (await axios.get(`${BASE_URL_TVDISCOVER}80&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL_TVDISCOVER}80&page=2`)).data.results), margin:120},
                {title:"Fantasia", items: await (await axios.get(`${BASE_URL_TVDISCOVER}10765&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL_TVDISCOVER}10765&page=2`)).data.results), margin:120},
                {title:"Família", items: await (await axios.get(`${BASE_URL_TVDISCOVER}10751&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL_TVDISCOVER}10751&page=2`)).data.results), margin:120},
                {title:"Documentário", items: await (await axios.get(`${BASE_URL_TVDISCOVER}99&page=1`)).data.results.concat(await (await axios.get(`${BASE_URL_TVDISCOVER}99&page=2`)).data.results), margin:120},
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
            },
            HeroSectionSeries:
            {
                OnTheAir:await (await axios.get(`${BASE_URL_ONTHEAIR}`)).data.results[randomNumber],
                Background: `${BASE_URL_IMG}${await (await axios.get(`${BASE_URL_ONTHEAIR}`)).data.results[randomNumber].backdrop_path}`,
                Poster: `${BASE_URL_IMG}${await (await axios.get(`${BASE_URL_ONTHEAIR}`)).data.results[randomNumber].poster_path}`
            }
        }
    } catch (error) {
        console.log(error)
    }




    return listMovies
}
/*

{
    genres: [
      {
        "id": 10759,
        "name": "Action & Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 10762,
        "name": "Kids"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10763,
        "name": "News"
      },
      {
        "id": 10764,
        "name": "Reality"
      },
      {
        "id": 10765,
        "name": "Sci-Fi & Fantasy"
      },
      {
        "id": 10766,
        "name": "Soap"
      },
      {
        "id": 10767,
        "name": "Talk"
      },
      {
        "id": 10768,
        "name": "War & Politics"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ]
  }

*/ 