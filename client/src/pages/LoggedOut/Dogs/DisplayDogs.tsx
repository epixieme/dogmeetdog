import Loader from "../../../components/shared/Loader/Loader";
import { Link } from "react-router-dom";
import Error from "../../../components/shared/ErrorMessage/ErrorMessage";


//absolute imports

import { DogCardList } from "@components/features";
import { ALL_DOGS } from "@graphql/queries";

import { useQuery } from '@apollo/client'
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
