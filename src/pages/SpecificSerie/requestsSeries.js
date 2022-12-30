import axios, { AxiosHeaders } from "axios";

const API_KEY = "a4dff07ca687866e825f0a03e0d23276"

export const requestsSerie = async (id) => {
    let data;

    try {
        data = {
            data: await (await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=pt-BR`)).data,
            providers: await (await axios.get(`https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${API_KEY}`)).data.results.BR,
            backgrounds: await (await axios.get(`https://api.themoviedb.org/3/tv/${id}/images?api_key=${API_KEY}`)).data.backdrops,
            trailers: (await axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}`)).data.results
        }
    } catch (error) {
        console.log(error)
    }

    return data
}

export const castSerie = async(id) => {
    let cast;
    console.log("id", id)

    try{
        cast = {
            peoples: await (await axios.get(`https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=a4dff07ca687866e825f0a03e0d23276&language=pt-BR`)).data.cast
        }
    }catch(error){
        console.log(error)
    }

    return cast
}