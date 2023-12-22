import React, { useState } from "react";
import { DogInformationCard } from "../../components/features";
import { ALL_DOGS, FIND_DOG_BY_NAME} from "../../graphql/queries";

import { ErrorMessage, Loader } from "../../components/shared";


import { useQuery } from "@apollo/client";


interface Dog {
  id: number;
  name: string;
  imageUrl: string;
  likes: string;
  description: string;
}

export default function Dashboard({}: any) {
  const [nameToSearch, setNameToSearch] = useState(null);

  const { data, loading, error } = useQuery(ALL_DOGS);

  if (loading) {
    console.log("loading");
    return <Loader loading={"Loading"} />;
  }

  if (error) {
    return <ErrorMessage error={error.message} />;
  }

  const dogElements = data.allDogs.map((dog: Dog) => (
    <div key={dog.id} className="dog-card">
      {/* <Link to={`/dogs/${dog.id}`}> */}
      <img src={dog.imageUrl} alt={dog.name} />
      <div className="dog-info">
        <div>{dog.description}</div>
        <h3>{dog.name[0].toUpperCase() + dog.name.substring(1)}</h3>
      </div>
      <i className={`dog-likes ${dog.likes}`}>{dog.likes}</i>
      {/* </Link> */}
    </div>
  ));

  const result = useQuery(FIND_DOG_BY_NAME, {
    variables: { nameToSearch },
    skip: !nameToSearch,
  });

  if (nameToSearch && result.data) {
    return (
      <Dog dog={result.data.findDog} onClose={() => setNameToSearch(null)} />
    );
  }
  return (
    <div className="dog-card">
      {/* <h2>Persons</h2>
      {data.allDogs.map((p: any) => (
        <div key={p.name}>
          {p.name} {p.street}
          <button onClick={() => setNameToSearch(p.name)}>
            show address
          </button>
        </div>
      ))} */}
    </div>
  );
}
