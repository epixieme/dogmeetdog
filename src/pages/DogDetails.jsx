import { useEffect, useState } from "react";
import { getDogs } from "../api";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
export default function DogDetails(){

    const [dog, setDog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const params = useParams()


    useEffect(() => {
        async function loadDogs() {
          setIsLoading(true);
          try {
            const data = await getDogs(params.id);
            setDog(data);
          } catch (err) {
            setError(err);
          } finally {
            setIsLoading(false);
          }
        }
        loadDogs();
      }, [params.id]);

    return(
        <div className="dog-detail-container">
        {!isLoading ? (
            <div className="dog-detail">
                <img src={dog.imageUrl} />
                <i className={`dog-type ${dog.type} selected`}>{dog.type}</i>
                <h2>{dog.name}</h2>
            
                <p>{dog.description}</p>
                <button className="link-button">Arrange a Play Date</button>
            </div>
        ) :  <div className="dog-detail-container"><Loader/></div>}
    </div>
)
    
}