import Loader from "../../../components/Shared/Loader/Loader";
import { Link } from "react-router-dom";
import Error from "../../../components/Shared/Error/Error";
import ALL_DOGS from '../../../graphql/allDogs/allDogs'

//add absolute imports and barrel files
import { useQuery } from '@apollo/client'
import Search from "../../../components/Shared/Filter/Filter";
import Dogs from "../../../../src/components/Dogs/Dogs";

interface Dog {
  id: number;
  name: string;
  imageUrl: string;
  likes: string;
  description:string
}

export default function DisplayDogs() {

 const { data, loading, error} = useQuery(ALL_DOGS)


  if (loading) {
    console.log('loading')
    return <Loader loading={'Loading'} />
  }

  if (error){
    return <Error error={error.message} />
  }

  return (
    <section className="dogs-container" id="dogAnchor">
      <div className="dog-list">
        <h1>Explore our dogs</h1>
        <section className="dog-card-container">
        <Dogs dogs={data.allDogs}/>
        </section>
      </div>
    </section>
  );
}
