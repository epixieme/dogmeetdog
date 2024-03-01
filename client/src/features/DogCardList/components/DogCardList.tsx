
import { useState } from "react";
import { DogInformationCard } from "@features";
import './dogCardList.css'
export default function DogCardList({ dogs }: any) {
  const [name, setName] = useState<null | string>(null);
  const [nameToSearch, setNameToSearch] = useState<null | string>(null);

  const dogElements = dogs.map((dog: any) => <DogInformationCard dog={dog} />);
  return (
    <>
      <section className="dog-card-container">{dogElements}</section>
    </>
  );
}
