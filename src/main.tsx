import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "../server";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
