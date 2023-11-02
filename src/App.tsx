import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



const queryClient = new QueryClient()
function App() {
  return (    <QueryClientProvider client={queryClient}><RouterProvider router={router} /></QueryClientProvider>)
}

export default App;
