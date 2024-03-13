import { render, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, test, vi } from "vitest";
import LoginForm from "./LoginForm";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "store/store";

describe("LoginForm component", () => {
  it("renders correctly", async () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <MockedProvider mocks={[]}>
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
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhcndpbkBkYXJ3aW4uY29tIiwiaWQiOiI2NWRjOGNjYWUyMzIyNTlmN2VlMjlkYmEiLCJpYXQiOjE3MTAzNDM2OTd9.KVS63db9DqasAgIBRBadV5JeV14rgkkOEswPNSGw-Yo";
    const setToken = vi.fn();
    const setErrorMsg = vi.fn();
    const setLoader = vi.fn();

    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <MockedProvider mocks={[]}>
          <MemoryRouter>
            <LoginForm
              setToken={setToken}
              setErrorMsg={setErrorMsg}
              setLoader={setLoader}
            />
          </MemoryRouter>
        </MockedProvider>
      </Provider>
    );

    fireEvent.change(getByPlaceholderText("Email address"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.submit(getByText("Log in"));

    await waitFor(() => {
      // expect(setToken).toHaveBeenCalledWith(expect.any(token));
      // expect(localStorage.setItem).toHaveBeenCalledWith(
      //   "dogUser-user-token",
      //   expect.any(token)
      // );
      expect(setErrorMsg).not.toHaveBeenCalled();
    });
  });
});
