import DogInformationCard from "features/DogInformationCard/components/DogInformationCard";
import "../styles/dogCardList.css";

interface Dog {
  id: number;
  name: string;
  breed: string;
  // Add other properties as needed
}

// Define the props interface for DogCardList
interface DogCardListProps {
  dogs: Dog[];
}

export default function DogCardList({ dogs }: { dogs: { id: number; name: string; breed: string }[] }) {
  console.log("dogs", dogs);
  const dogElements = dogs.map((dog) => <DogInformationCard dog={dog} testid="dog-information-card" />);

  return (
    <>
      <section className="dog-card-container" data-testid="dog-card-container">
        {dogElements}
      </section>
    </>
  );
}
