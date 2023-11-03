import { useEffect, useState } from "react";
import { getDogs } from "../api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link } from "react-router-dom";



import { useQuery, useQueryClient } from "react-query";



interface Dog {
  id: number;
  name: string;
  imageUrl: string;
  likes: string;
}

export default function Dogs() {

  const queryClient = useQueryClient()
  const [dogs, setDogs] = useState<Dog[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [error, setError] = useState< {} | null>(null);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['dogList'],
    queryFn: async () => {
      const data = await getDogs()
      setDogs(data)
    }, 
  })
  // useEffect(() => {
  //   async function loadDogs() {
  //     setIsLoading(true);
  //     try {
  //       const data = await getDogs();
  //       setDogs(data);
  //     } catch (error:unknown) {
  //       if (typeof error === "string") {
  //         error.toUpperCase() // works, `e` narrowed to string
  //     } else if (error && error instanceof Error) {
  //       setError(error);
  //     }
  //     // ..
  
       
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   loadDogs();
  // }, []);

  const dogElements = dogs.map((dog) => (
    <div key={dog.id} className="dog-card">
      <Link to={`/dogs/${dog.id}`}>
        <img src={dog.imageUrl} alt={dog.name} />
        <div className="dog-info">
          <h3>{dog.name[0].toUpperCase() + dog.name.substring(1)}</h3>
        </div>
        <i className={`dog-likes ${dog.likes}`}>
          {dog.likes.replace("-", " ")}
        </i>
      </Link>
    </div>
  ));

  return (
    <section className="dogs-container" id="dogAnchor">
      <div className="dog-list">
        <h1>Explore our dogs</h1>
        <section className="dog-card-container">{dogElements}</section>
        {/* {isLoading && <Loader loading="...loading" />} */}
        {/* {error && <Error error={`There was an error "${error.message}".`} />} */}
      </div>
    </section>
  );
}