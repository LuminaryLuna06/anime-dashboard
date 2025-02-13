import { Routes, Route } from "react-router-dom";
import Admin from "../pages/admin/Admin";
import { AuthProvider } from "../context/authContext";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
const AdminRoutes = () => {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
  );
};

export default AdminRoutes;
