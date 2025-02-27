import { Routes, Route } from "react-router-dom";
import Admin from "../pages/admin/Admin";
import { AuthProvider } from "../context/authContext";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import Users from "../pages/admin/Users/Users";
import Clubs from "../pages/admin/Clubs/Clubs"
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/clubs" element={<Clubs />} />
    </Routes>
  );
};

export default AdminRoutes;
