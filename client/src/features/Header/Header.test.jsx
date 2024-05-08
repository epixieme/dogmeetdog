import { describe, it, expect, test } from "vitest";
import { render, screen, getByText, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./components/Header";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import { setContext } from "@apollo/client/link/context";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
// import a page with a button and test that button
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
describe("header", () => {
  it("renders text", async () => {
    render(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </Provider>
      </ApolloProvider>
    );
    // const user = fireEvent;
    // await user.click(screen.getByText(/Our Dogs/i));
    expect(screen.getByText(/Meet the Dogs/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();

    // check if App components renders headline
  });
});
