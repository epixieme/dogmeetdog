import { useEffect, useState } from "react";
import { getDogs } from "../api";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadDogs() {
      setIsLoading(true);
      try {
        const data = await getDogs();
        setDogs(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadDogs();
  }, []);

  const dogElements = dogs.map((dog) => (
    <div key={dog.id} className="dog-card">
      <img src={dog.imageUrl} />
      <div className="dog-info">
        <h3>{dog.name[0].toUpperCase() + dog.name.substring(1)}</h3>
       
      </div>
      <i className={`dog-likes ${dog.likes}`}>
        {dog.likes.replace("-", " ")}
      </i>
    </div>
  ));

  return (
    <section className="dogs-container" id="dogAnchor">
      <div className="dog-list">
        <h1>Explore our dogs </h1>
        <section className="dog-card-container">{dogElements}</section>
        {isLoading && <Loader loading="...loading" />}
        {error && <Error error={`There was an error "${error.message}".`} />}
      </div>
    </section>
  );
}

