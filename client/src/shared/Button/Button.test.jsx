import { describe, it, expect, test } from "vitest";
import { render, screen, getByText, fireEvent, getAllByRole } from "@testing-library/react";
import Button from "./components/Button";
import { MemoryRouter } from "react-router-dom";

// import a page with a button and test that button

describe("The button works as expected", () => {
  it("renders text", () => {
    render(
      <MemoryRouter>
        <Button btnText="test" />
      </MemoryRouter>
    );
    expect(screen.getByText(/test/i)).toBeDefined();

    // check if App components renders headline
  });

  it("can be clicked", async () => {
    const handleClick = vi.fn();
    render(
      <MemoryRouter>
        <Button btnText="Click me" onClick={handleClick} disabled={false} />
      </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: /click me/i });
    await fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled", async () => {
    const handleClick = vi.fn();
    render(
      <MemoryRouter>
        <Button btnText="Click me" onClick={handleClick} disabled={true} />
      </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: /click me/i });
    await fireEvent.click(button);
    expect(button).toBeDisabled();
  });
});
