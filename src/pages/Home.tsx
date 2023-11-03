import { useEffect, useState } from "react";

import Button from "../components/Button";
import Carousel from "../components/Carousel";

// import useCarousel from "../hooks/useCarousel";


export default function Home() {

  return (
    <>
      <section className="home-container">
        <p>Sign Up Today and find your pupster a play date</p>
        <Button btnText={"Find your dog a play date"} route="/questions" />

      </section>
     
     
    </>
  );
}
