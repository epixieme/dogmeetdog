import { useEffect, useState } from "react";


// import Carousel from "../components/Carousel";
import Button from "../../components/shared/Button/Button";
import React from "react";

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
