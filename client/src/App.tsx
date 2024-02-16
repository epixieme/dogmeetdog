import { RouterProvider } from "react-router-dom";
import { useCookies } from "react-cookie";
import { setContext } from "@apollo/client/link/context";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import useRouter from "./routes/useRouter";

function App() {
  const router = useRouter();

  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
  });

  const [cookies] = useCookies(["token"]);

  const authLink = setContext((_, { headers }) => {
    const token = cookies.token || "";
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
   
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  
  );
}

export default App;
