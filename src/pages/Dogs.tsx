import { useState } from "react";
import { getDogs } from "../api";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import { Link } from "react-router-dom";
import All_Dogs from "../schema"

import { gql,useQuery } from '@apollo/client'
// import { useQuery, useQueryClient } from "react-query";

// const client = new ApolloClient({
//   uri: 'http://localhost:4000',
//   cache: new InMemoryCache(),
// })

// const query = gql`
// query {
//   allDogs {
//     description,
//     id,
//     likes,
//     name
//   }
// }
// `
// client.query({ query })
//   .then((response) => {
//     console.log(response.data)
//   })

interface Dog {
  id: number;
  name: string;
  imageUrl: string;
  likes: string;
}

export default function Dogs() {
  // const queryClient = useQueryClient();
 
  const [dogs, setDogs] = useState<Dog[]>([]);
  // const result = useQuery(All_Dogs)
  // console.log(result)
  // const { isLoading, isError, data, error } = useQuery({
  //   queryKey: ["dogList"],
  //   queryFn: async () => {
  //     const data = await getDogs();
  //    
  //   },
  // });


  // if (result.loading) {
  //   return <div>loading...</div>
  // }else{
  //   setDogs(result.data.allDogs);
  // }

  // const dogElements = dogs.map((dog) => (
  //   <div key={dog.id} className="dog-card">
  //     <Link to={`/dogs/${dog.id}`}>
  //       <img src={dog.imageUrl} alt={dog.name} />
  //       <div className="dog-info">
  //         <h3>{dog.name[0].toUpperCase() + dog.name.substring(1)}</h3>
  //       </div>
  //       <i className={`dog-likes ${dog.likes}`}>
  //         {dog.likes.replace("-", " ")}
  //       </i>
  //     </Link>
  //   </div>
  // ));

  return (
    <section className="dogs-container" id="dogAnchor">
      {/* <div className="dog-list">
        <h1>Explore our dogs</h1>
        <section className="dog-card-container">{dogElements}</section>
        {isLoading && <Loader loading="...loading" />}
        {isError && <Error error={`There was an error "${(error as Error).message}".`} />
      }
      </div> */}
    </section>
  );
}
