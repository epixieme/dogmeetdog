import { useEffect, useState } from "react";
import { getDogs } from "../api";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";




  const DogDetails: React.FC = () => {
    const [dog, setDog] = useState<any[]>([]); // You can replace 'any' with a more specific type if you have one
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
  
    const params: { id?: string } = useParams();
  console.log(dog)
    useEffect(() => {
      async function loadDogs() {
        setIsLoading(true);
        try {
          if (params.id) {
            const data = await getDogs(params.id);
            setDog(data);
          }
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      }
      loadDogs();
    }, [params.id]);
  

  return (
    <div className="dog-detail-container">
      {/* {!isLoading ? (
        <div className="dog-detail">
          <img src={dog.imageUrl} />
          <i className={`dog-type ${dog.type} selected`}>{dog.type}</i>
          <h2>{dog.name}</h2>

          <p>{dog.description}</p>
          <button className="link-button">Arrange a Play Date</button>
        </div>
      ) : (
        <div className="dog-detail-container">
          <Loader />
        </div>
      )} */}
    </div>
  );
}

export default DogDetails