import { render, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LoginForm from "./components/LoginForm";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "store/store";
import AUTH from "graphql/mutations/AUTH";

// Mocked mutation data
const mockedData = {
  loginUser: {
    value: "mocked-token",
  },
};

// Mocked mutation
const mocks = [
  {
    request: {
      query: AUTH,
      variables: {
        email: "darwin@darwin.com",
        password: "secret",
      },
    },
    result: { data: mockedData },
  },
];

describe("LoginForm component", () => {
  it("renders correctly", async () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <MockedProvider mocks={mocks}>
          <MemoryRouter>
            <LoginForm />
          </MemoryRouter>
        </MockedProvider>
      </Provider>
    );

    await waitFor(() => {
      expect(getByText("Sign in to your account")).toBeInTheDocument();
      expect(getByPlaceholderText("Email address")).toBeInTheDocument();
      expect(getByPlaceholderText("Password")).toBeInTheDocument();
      // expect(getByText("Log in")).toBeInTheDocument();
    });
  });
  it("submits form with valid data", async () => {
    const setToken = vi.fn();
    const setErrorMsg = vi.fn();
    const setLoader = vi.fn();
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <MemoryRouter>
            <LoginForm
              setToken={setToken} // Mock setToken function
              setErrorMsg={setErrorMsg} // Mock setErrorMsg function
              setLoader={setLoader} // Mock setLoader function
            />
          </MemoryRouter>
        </MockedProvider>
      </Provider>
    );

    fireEvent.change(getByPlaceholderText("Email address"), {
      target: { value: "darwin@darwin.com" },
    });
    fireEvent.change(getByPlaceholderText("Password"), {
      target: { value: "secret" },
    });
    fireEvent.click(getByText("Log In")); // Use fireEvent.click instead of fireEvent.submit

    await waitFor(() => {
      expect(mocks[0].request.variables.email).toBe("darwin@darwin.com");
      expect(mocks[0].request.variables.password).toBe("secret");
    });

    // Assert that the token is set (assuming setToken function is called upon successful login)
    await waitFor(() => {
      expect(setToken).toHaveBeenCalledWith("mocked-token");
    });
  });
});
