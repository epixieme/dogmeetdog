import { useEffect, useState } from "react";

import Button from "../components/Button";
import Carousel from "../components/Carousel";
import Loader from "../components/Loader";
import Error from "../components/Error";
import useCarousel from "../hooks/useCarousel";
import { getDogs } from "../api";

export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const text = dogs.map((item) => item.name);
  const images = dogs.map((item) => item.imageUrl);
  const carousel = useCarousel(images.length, 1);

  // could have used useloaderdata
  useEffect(() => {
    async function loadDogs() {
      setIsLoading(true);
      try {
        const data = await getDogs();
        setDogs(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadDogs();
  }, []);

  return (
    <>
      <section className="home-container">
        <p>Sign Up Today and find your pupster a play date</p>
        <Button btnText={"Find your dog a play date"} route="/questions" />

      </section>
     
     
    </>
  );
}
