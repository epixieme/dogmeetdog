
import { useState } from "react";
import { FIND_DOG_BY_NAME } from "@queries";
import { DogInformationCard } from "@features";
import { Loader } from "@shared";
import { useQuery } from "@apollo/client";

//
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
