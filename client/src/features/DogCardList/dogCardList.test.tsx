import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DogCardList from "./components/DogCardList";
import { MemoryRouter } from "react-router";

describe("DogCardList component", () => {
  it("renders dog cards correctly", () => {
    // Mock dog data
    const dogs = [
      { id: 1, name: "Buddy", breed: "Labrador Retriever" },
      { id: 2, name: "Max", breed: "German Shepherd" },
      // Add more mock data as needed
    ];

    // Render the DogCardList component with mock data
    const { getByTestId, getAllByTestId } = render(
      <MemoryRouter>
        <DogCardList dogs={dogs} />
      </MemoryRouter>
    );

    // Get the container element
    const dogCardContainer = getByTestId("dog-card-container");

    // Assert that the container element is rendered
    expect(dogCardContainer).toBeInTheDocument();

    // Get all dog card elements
    const dogCards = getAllByTestId("dog-information-card");

    // Assert that the correct number of dog card elements are rendered
    expect(dogCards).toHaveLength(dogs.length);

    // Assert that each dog card contains the correct information
    dogs.forEach((dog, index) => {
      expect(dogCards[index]).toHaveTextContent(dog.name);
      expect(dogCards[index]).toHaveTextContent(dog.breed);
    });
  });
});
