import { describe, it, expect, test } from "vitest";
import { render, screen, getByText, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./components/Header";
// import a page with a button and test that button

describe("header", () => {
  it("renders text", async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    // const user = fireEvent;
    // await user.click(screen.getByText(/Our Dogs/i));
    expect(screen.getByText(/Meet the Dogs/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Dogs/i)).toBeInTheDocument();
    // check if App components renders headline
  });
});
