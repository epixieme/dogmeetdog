//absolute imports
import { ErrorMessage, Loader } from "shared";
import { DogCardList } from "features";
import { ALL_DOGS } from "graphql/queries";
import { useQuery } from "@apollo/client";

export default function DisplayDogs() {
  const { data, loading, error } = useQuery(ALL_DOGS);

  if (loading) {
    console.log("loading");
    return <Loader loading={"Loading"} />;
  }

  if (error) {
    return <ErrorMessage error={error.message} />;
  }
  console.log(data.allDogs);
  return (
    <section className="dogs-container" id="dogAnchor">
      <div className="dog-list">
        <h1>Explore our dogs</h1>
        <DogCardList dogs={data.allDogs} />
      </div>
    </section>
  );
}
