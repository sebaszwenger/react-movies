import { MoviesGrid } from "./components/MoviesGrid.jsx";
import { MovieCard } from "./components/MovieCard.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesGrid />} />
            <Route path="/movie" element={<MovieCard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}
