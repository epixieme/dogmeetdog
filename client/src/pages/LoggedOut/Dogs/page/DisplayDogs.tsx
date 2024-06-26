//absolute imports
import { ErrorMessage, Loader } from "shared";
import { DogCardList } from "features";
import ALL_USERS from "graphql/queries/allUsers/ALL_USERS";
import { useQuery } from "@apollo/client";
import "../styles/displaydogs.css";

export default function DisplayDogs() {
  const { data, loading, error } = useQuery(ALL_USERS);
  console.log(data, "all users");

  if (loading) {
    console.log("loading");
    return <Loader loading={"Loading"} />;
  }

  if (error) {
    return <ErrorMessage error={error.message} />;
  }

  return (
    <section className="dogs-container" id="dogAnchor">
      <div className="dog-list">
        <h1>Meet some of our dogs</h1>
        <DogCardList dogs={data.allUsers} />
      </div>
    </section>
  );
}
