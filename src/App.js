import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import { MyContext } from "./context/MyContext";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import { Series } from "./pages/Series/Series";
import SpecificFilm from "./pages/SpecificFilm/SpecificFilm";
import SpecificSerie from "./pages/SpecificSerie/SpecificSerie";
import { requests } from "./requests.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";


export default function App() {
  const [allItems, setAllItems] = useState()
  const [itemsHomeScreen, setItemsHomeScreen] = useState()
  const [itemsMoviesScreen, setItemsMovieScreen] = useState()
  const [itemsSeriesScreen, setItemsSeriesScreen] = useState()
  console.log(allItems?.HeroSectionHome)

  useEffect(() => {
    const getListMovies = async () => {
      const listMovies = await requests()

      setItemsHomeScreen(listMovies?.HomeScreen)
      setItemsMovieScreen(listMovies?.MoviesScreen)
      setItemsSeriesScreen(listMovies?.SeriesScreen)
      setAllItems(listMovies)
    }

    getListMovies()
  }, [])

  return (
    <BrowserRouter>
      <GlobalStyles />
      <MyContext.Provider value={{
        setItemsHomeScreen, setItemsMovieScreen, itemsHomeScreen, itemsMoviesScreen, itemsSeriesScreen, allItems
      }}>

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/filmes' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path="/filmes/:id" element={<SpecificFilm />} />
          <Route path="/series/:id" element={<SpecificSerie />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/cadastrar" element={<Signup/>}/>
        </Routes>



      </MyContext.Provider >
    </BrowserRouter>

  );
}

