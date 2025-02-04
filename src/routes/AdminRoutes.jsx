import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Admin from "../pages/admin/Admin";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
