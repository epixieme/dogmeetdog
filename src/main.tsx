import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import "../server.old";

import { ApolloClient, InMemoryCache, gql, ApolloProvider,} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

// import { QueryClient, QueryClientProvider } from "react-query";

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as Element).render(

<ApolloProvider client={client}>
    <App />
</ApolloProvider>

);
