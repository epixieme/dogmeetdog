import Loader from "../../../components/shared/Loader/Loader";
import { Link } from "react-router-dom";
import Error from "../../../components/shared/ErrorMessage/ErrorMessage";
import ALL_DOGS from '../../../graphql/allDogs/allDogs'

//add absolute imports and barrel files
import { useQuery } from '@apollo/client'
import { DogCardList } from "../../../components/Features";


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
      
        <DogCardList dogs={data.allDogs}/>
      
      </div>
    </section>
  );
}
