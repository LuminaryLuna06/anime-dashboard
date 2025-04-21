import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import { Suspense } from "react";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Loading from "./components/layout/Loading";

import PublicRoutes from "./routes/PublicRoutes";
import AdminRoutes from "./routes/AdminRoutes";

import { AuthProvider } from "./context/authContext/index";
import MayShow from "./components/layout/MayShow";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div
          className="text-gray-200 bg-gradient-to-r from-black to-slate-800 font-sans dark transition-transform duration-300"
          // data-theme="dark"
        >
          {/* <Loading /> */}
          <MayShow>
            <NavBar />
          </MayShow>
          {/* <SkeletonTheme baseColor="#202020" highlightColor="#444"> */}
          <PublicRoutes />
          <AdminRoutes />
          {/* </SkeletonTheme> */}
          <MayShow>
            <Footer />
          </MayShow>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
