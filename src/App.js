import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import { MyContext } from "./context/MyContext";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import { requests } from "./requests.js";


export default function App() {
  const [allItems, setAllItems] = useState()
  const [itemsHomeScreen, setItemsHomeScreen] = useState()
  const [itemsMoviesScreen, setItemsMovieScreen] = useState()

  useEffect(() => {
    const getListMovies = async () => {
        const listMovies = await requests()

        setItemsHomeScreen(listMovies.HomeScreen)
        setItemsMovieScreen(listMovies.MoviesScreen)
        setAllItems(listMovies)
    }

    getListMovies()
}, [])

  return (
    <BrowserRouter>
      <GlobalStyles />
      <MyContext.Provider value={{setItemsHomeScreen, setItemsMovieScreen, itemsHomeScreen, itemsMoviesScreen, allItems
      }}>

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/filmes' element={<Movies />} />
        </Routes>

      
      </MyContext.Provider >
    </BrowserRouter>

  );
}

