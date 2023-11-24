import Loader from "../../../components/Shared/Loader/Loader";
import { Link } from "react-router-dom";
import Error from "../../../components/Shared/Error/Error";
import ALL_DOGS from '../../../../src/graphql/allDogs/allDogsQuery'

//add absolute imports and barrel files
import { useQuery } from '@apollo/client'

interface Dog {
  id: number;
  name: string;
  imageUrl: string;
  likes: string;
  description:string
}

export default function Dogs() {

  const { data, loading, error} = useQuery(ALL_DOGS)

  if (loading) {
    return <Loader loading={'loading'} />
  }

  if (error){
    return <Error error={error.message} />
  }

  const dogElements = data.allDogs.map((dog: Dog) => (
    <div key={dog.id} className="dog-card">
      <Link to={`/dogs/${dog.id}`}>
        <img src={dog.imageUrl} alt={dog.name} />
        <div className="dog-info">
        <div>{dog.description}</div>
          <h3>{dog.name[0].toUpperCase() + dog.name.substring(1)}</h3>
        </div>
        <i className={`dog-likes ${dog.likes}`}>
          {dog.likes}
        </i>
      </Link>
    </div>
  ));

  return (
    <section className="dogs-container" id="dogAnchor">
      <div className="dog-list">
        <h1>Explore our dogs</h1>
        <section className="dog-card-container">{dogElements}</section>
      </div>
    </section>
  );
}
