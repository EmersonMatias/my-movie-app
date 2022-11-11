import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import { MyContext } from "./context/MyContext";
import Home from "./pages/Home/Home";


export default function App() {
  const URL_IMAGE_REQUISITION = "https://image.tmdb.org/t/p/"
  const API_KEY = "?api_key=a4dff07ca687866e825f0a03e0d23276"

  return (
    <BrowserRouter>
      <GlobalStyles />
      <MyContext.Provider value={{ URL_IMAGE_REQUISITION, API_KEY }}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </MyContext.Provider >
    </BrowserRouter>

  );
}

