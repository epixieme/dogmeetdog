import { describe, it, expect } from "vitest";
import { render, screen, getByText, fireEvent, getAllByRole } from "@testing-library/react";
import homePage from "./page/HomePage";
import { MemoryRouter } from "react-router";
import HomePage from "./page/HomePage";

describe("DogCardList component", () => {
  it("it renders the homepage text", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Sign up today and find your pupster a play date/i)).toBeDefined();
  });
});
