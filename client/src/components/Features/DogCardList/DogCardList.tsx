import { Link } from "react-router-dom";
import { useState } from "react";
import { FIND_DOG_BY_NAME } from "../../../graphql/queries";
import { DogInformationCard } from "..";
import { Loader } from "../../shared";
import { useQuery } from "@apollo/client";

interface Dogs {
    id: number;
    name: string;
    imageUrl: string;
    likes: string;
    description:string
  }

export default function DogCardList({dogs}:any){

    // console.log(dogs.name.includes('Wolfy'))
const [name, setName] = useState<null|string>(null)
const [nameToSearch, setNameToSearch] = useState<null|string>(null)

    const {data, error, loading} = useQuery(FIND_DOG_BY_NAME, {
      variables: { nameToSearch },
      skip: !nameToSearch,
    })

    if (loading) {
        console.log('loading')
        return <Loader loading={'Loading'} />
      }

      if (error){
        console.log(error)
      }
    
      const dogElements = dogs.map((dog:any) => (
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
      
    if (nameToSearch && data) {
        return (
          <DogInformationCard
            dog={data.findDog !== null && data.findDog}
            onClose={() => setNameToSearch(null)}
          />
        )
      }
     

return (<>
<div className="search-bar" >
<input onChange ={(event) =>setName(event.target.value)} />
<button onClick={(event) => setNameToSearch(name)}></button>
</div>
<section className="dog-card-container">
{dogElements}
</section>

</>
)
}


