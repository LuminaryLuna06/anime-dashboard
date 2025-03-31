import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Animes from "../pages/animes/Animes";
import AnimePage from "../pages/anime/AnimePage";
import SearchAnime from "../components/function/SearchAnime";
import TopAnime from "../pages/top-anime/TopAnime";
import AnimeType from "../pages/anime-type/AnimeType";
import Season from "../pages/season/Season";
import EpisodePage from "../pages/anime/Episodes/EpisodePage";
import Test from "../pages/test/Test";
import Favourites from "../pages/favourites/favourites";
const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/anime" element={<Animes />} />
    <Route path="/anime/:id" element={<AnimePage />} />
    <Route path="/anime/:id/episodes/:epId" element={<EpisodePage />} />
    <Route path="/popular" element={<TopAnime />} />
    {/* <Route path="/genres" element={<Genre />} /> */}
    {/* <Route path="/genres/:genreId/:genreName" element={<GenrePage />} /> */}
    <Route path="/search" element={<SearchAnime />} />
    <Route path="/anime-type" element={<AnimeType />} />
    <Route path="/season" element={<Season />} />
    <Route path="/test" element={<Test />} />
    <Route path="/favourites" element={<Favourites />} />
  </Routes>
);

export default PublicRoutes;
