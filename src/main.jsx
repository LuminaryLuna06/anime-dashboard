import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Loading from "./components/layout/Loading.jsx";

import "@mantine/core/styles.css";

const App = lazy(() => delay(import("./App.jsx")));
const queryClient = new QueryClient();

import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

createRoot(document.getElementById("root")).render(
  // <StrictMode>

  <QueryClientProvider client={queryClient}>
    <MantineProvider
      theme={theme}
      withGlobalStyles={false}
      withNormalizeCSS={false}
    >
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </MantineProvider>
    {/* <ReactQueryDevtools /> */}
  </QueryClientProvider>
  // </StrictMode>
);

function delay(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
