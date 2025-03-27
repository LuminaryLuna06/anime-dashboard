import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Loading from "./components/layout/Loading.jsx";

const App = lazy(() => import("./App.jsx"));
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
