import { useState } from "react";
import { getDogs } from "../../../api";
import Loader from "../../../components/Shared/Loader/Loader";
import { Link } from "react-router-dom";
// import All_Dogs from "../../../schema"
import Error from "../../../components/Shared/Error/Error";

import { gql } from "@apollo/client";
import { useQuery } from '@apollo/client'

const ALL_DOGS = gql`
  query{
    allDogs {
      name
      
     
    }
  }
`

interface Dog {
  id: number;
  name: string;
  imageUrl: string;
  likes: string;
}

export default function Dogs() {

  const { data, loading } = useQuery(ALL_DOGS)

  if (loading) {
    return <div>.jdagshjkdas.</div>
  }


  const dogElements = data.allDogs.map((dog) => (
    <div key={dog.id} className="dog-card">
      {/* <Link to={`/dogs/${dog.id}`}>
        <img src={dog.imageUrl} alt={dog.name} />
        <div className="dog-info"> */}
          <h3>{dog.name[0].toUpperCase() + dog.name.substring(1)}</h3>
        {/* </div>
        <i className={`dog-likes ${dog.likes}`}>
          {dog.likes}
        </i>
      </Link> */}
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
