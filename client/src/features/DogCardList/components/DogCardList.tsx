import { useState } from "react";
import DogInformationCard from "features/DogInformationCard/components/DogInformationCard";
import "../styles/dogCardList.css";

interface User {
  dogs: String[];
}

export default function DogCardList({ dogs }: User) {
  const dogElements = dogs.map((dog) => <DogInformationCard dog={dog} />);
  return (
    <>
      <section className="dog-card-container" data-testid="dog-card-container">
        {dogElements}
      </section>
    </>
  );
}
