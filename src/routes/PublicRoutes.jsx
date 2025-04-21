import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Animes from "../pages/animes/Animes";
import AnimePage from "../pages/anime/AnimePage";
import TopAnime from "../pages/top-anime/TopAnime";
import AnimeType from "../pages/anime-type/AnimeType";
import Season from "../pages/season/Season";
import EpisodePage from "../pages/anime/Episodes/EpisodePage";
import Test from "../pages/test/Test";
const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/anime" element={<Animes />} />
    <Route path="/anime/:id" element={<AnimePage />} />
    <Route path="/anime/:id/episodes/:epId" element={<EpisodePage />} />
    <Route path="/popular" element={<TopAnime />} />
    <Route path="/anime-type" element={<AnimeType />} />
    <Route path="/season" element={<Season />} />
    <Route path="/test" element={<Test />} />
  </Routes>
);

export default PublicRoutes;
