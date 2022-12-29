import axios from "axios"

export const request = async (id) => {
    let data

    try {
        data = {
            data: await (await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a4dff07ca687866e825f0a03e0d23276&language=pt-BR`)).data,
            providers: await (await axios.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=a4dff07ca687866e825f0a03e0d23276`)).data?.results?.BR,
            backgrounds: await (await axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=a4dff07ca687866e825f0a03e0d23276`)).data.backdrops,
            trailers: await (await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=a4dff07ca687866e825f0a03e0d23276`)).data.results
        }
    } catch (error) {
        console.log(error)
    }
    return data
}


export const castFilm = async(id) => {
    let cast;

    try{
        cast = {
            peoples: await (await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=a4dff07ca687866e825f0a03e0d23276&language=pt-BR`)).data.cast
        }
    }catch(error){
        console.log(error)
    }

    return cast
}