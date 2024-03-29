//absolute imports
import { ErrorMessage, Loader } from "shared";
import { DogCardList } from "features";
import { ALL_DOGS } from "graphql/queries";
import { useQuery } from "@apollo/client";
import "./displaydogs.css";

export default function DisplayDogs() {
  const { data, loading, error } = useQuery(ALL_DOGS);

  console.log(data);

  if (loading) {
    console.log("loading");
    return <Loader loading={"Loading"} />;
  }

  if (error) {
    return <ErrorMessage error={error.message} />;
  }
  // console.log(data.allDogs);
  return (
    <section className="dogs-container" id="dogAnchor">
      <div className="dog-list">
        <h1>Meet some of our dogs</h1>
        <DogCardList dogs={data.allDogs} />
      </div>
    </section>
  );
}
