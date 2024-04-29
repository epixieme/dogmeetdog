import { Link } from "react-router-dom";
import "../styles/dogInformationCard.css";
import { useEffect, useState } from "react";
interface DogProps {
  onClose?: () => void;
  dog: any;
}

const DogInformationCard = ({ dog, onClose }: DogProps) => {
  const [dogs, setDogs] = useState("");

  // place holder fetch  until something is set up with cloudinary - for testing only
  async function fetchDogs() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogs = await response.json();
    return dogs;
  }

  useEffect(() => {
    fetchDogs().then((dogs) => {
      console.log("dogs", dogs);
      setDogs(dogs.message); // fetched movies
    });
  }, []);

  return (
    <div key={dog.id} className="dog-card" data-testid="dog-information-card">
      {/* <Link to={`/dogs/${dog.id}`}> */}
      <div className="dog-card-contents">
        <img src={dogs} />
        <h3>Name: {dog.name[0].toUpperCase() + dog.name.substring(1)}</h3>

        <i>Breed: {dog.breed}</i>
        <i>Personality: {dog.personality}</i>
      </div>
    </div>
  );
};

export default DogInformationCard;
