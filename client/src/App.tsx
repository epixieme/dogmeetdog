import { RouterProvider } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import useRouter from "./routes/useRouter";
import React, { useState, useEffect } from "react";
import { Server } from "socket.io";
const socket = io("http://localhost:4000");

function App() {
  const router = useRouter();

  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("dogUser-user-token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
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
