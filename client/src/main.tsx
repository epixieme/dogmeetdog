import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApolloClient, InMemoryCache, gql, ApolloProvider,} from '@apollo/client'
import React from "react";

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById("root") as Element).render(

<ApolloProvider client={client}>
    <App />
</ApolloProvider>

);
