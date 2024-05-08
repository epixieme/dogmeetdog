import { describe, it, expect, test } from "vitest";
import { render, screen, getByText, fireEvent } from "@testing-library/react";
import Button from "./components/Button";
import { MemoryRouter } from "react-router-dom";

// import a page with a button and test that button

describe("button", () => {
  it("renders text", () => {
    render(
      <MemoryRouter>
        <Button btnText="test" />
      </MemoryRouter>
    );
    expect(screen.getByText(/test/i)).toBeDefined();
    // check if App components renders headline
  });
  // it('renders text', async() => {

  //     render(
  //       <MemoryRouter><Button route='/dogs'  btnText = 'test' /> </MemoryRouter>
  //     );
  //     const user = fireEvent
  //     await user.click(screen.getByText(/test/i))
  //     expect(screen.getByText(/Explore our /i)).toBeInTheDocument()
  //     // check if App components renders headline
  //   });
});
