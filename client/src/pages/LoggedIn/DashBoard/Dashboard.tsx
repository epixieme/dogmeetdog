import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ErrorMessage, Loader } from "@shared";
import CURRENT_USER from "graphql/queries/CURRENT_USER";
import "./dashboard.css";

export default function Dashboard({}: any) {
  const { data, loading, error } = useQuery(CURRENT_USER);

  // const result = useQuery(FIND_DOG_BY_NAME, {
  //   variables: { nameToSearch },
  //   skip: !nameToSearch,
  // })
  // const { data, loading, error } = useQuery(ALL_DOGS);
  // const [nameToSearch, setNameToSearch] = useState(null);

  // if (loading) {
  //   console.log("loading");
  //   return <Loader loading={"Loading"} />;
  // }

  // if (error) {
  //   return <ErrorMessage error={error.message} />;
  // }

  // const dogElements = data.allDogs.map((dog: Dog) => (
  //   <div key={dog.id} className="dog-card">
  //     {/* <Link to={`/dogs/${dog.id}`}> */}
  //     <img src={dog.imageUrl} alt={dog.name} />
  //     <div className="dog-info">
  //       <div>{dog.description}</div>
  //       <h3>{dog.name[0].toUpperCase() + dog.name.substring(1)}</h3>
  //     </div>
  //     <i className={`dog-likes ${dog.likes}`}>{dog.likes}</i>
  //     {/* </Link> */}
  //   </div>
  // ));

  // const result = useQuery(FIND_DOG_BY_NAME, {
  //   variables: { nameToSearch },
  //   skip: !nameToSearch,
  // });

  // if (nameToSearch && result.data) {
  //   return (
  //     <Dog dog={result.data.findDog} onClose={() => setNameToSearch(null)} />
  //   );
  // }

  // console.log(data.email);

  return (
    <div className="">
      {/* <h2>Persons</h2>
      {data.allDogs.map((p: any) => (
        <div key={p.name}>
          {p.name} {p.street}
          <button onClick={() => setNameToSearch(p.name)}>
            show address
          </button>
        </div>
      ))} */}
      <h1>hello</h1>
      <h1>{data.currentUser.name}</h1>
    </div>
  );
}
