import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

import PublicRoutes from "./routes/PublicRoutes";
import AdminRoutes from "./routes/AdminRoutes";

import { AuthProvider } from "./context/authContext/index";
function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="text-gray-200 bg-gradient-to-r from-black to-slate-800 font-sans">
          <NavBar />
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <PublicRoutes />
            <AdminRoutes />
          </SkeletonTheme>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
