import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Animes from "../pages/animes/Animes";
import AnimePage from "../pages/anime/AnimePage";
import Dashboard from "../pages/dashboard/Dashboard";
import Genre from "../pages/genres/Genre";
import GenrePage from "../pages/genres/components/GenrePage.jsx/GenrePage";
import Login from "../pages/login/Login";

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/anime/:id" element={<AnimePage />} />
    <Route path="/anime" element={<Animes />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/genres" element={<Genre />} />
    <Route path="/genres/:genreId/:genreName" element={<GenrePage />} />
    <Route path="/login" element={<Login />} />

    <Route
      path="*"
      element={<div> Not Found or You do not have permission.</div>}
    />
  </Routes>
);

export default PublicRoutes;
