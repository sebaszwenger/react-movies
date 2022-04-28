import MoviesGrid from "./components/MoviesGrid.jsx";
import MovieCard from "./components/MovieCard.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import styles from "./App.module.css";
import LandingPage from "./pages/LandingPage.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <header>
        {/* <NavLink to="/">
          <h1 className={styles.title}>Movies</h1>
        </NavLink> */}
        <h1 className={styles.title}>
          <NavLink to="/">Movies</NavLink>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
