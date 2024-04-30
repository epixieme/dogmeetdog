import { Button } from "@shared";
import backgroundImage from "../assets/about-hero-image.jpg";
import "../styles/about.css";

import Typography from "shared/Typography/Typography";
export default function About() {
  return (
    <section className="about-container">
      <img src={backgroundImage} className="about-hero-img" />
      <section className="about-content">
        <Typography variant="h1">Welcome to Dog Meet Dog</Typography>
        <Typography variant="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          consequuntur aspernatur iusto fugit vitae doloremque recusandae quis
          repellat cum vel illo velit! Soluta sit, ab facere sed at corporis ex?
        </Typography>
        <Typography variant="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          consequuntur aspernatur iusto fugit vitae doloremque recusandae quis
          repellat cum vel illo velit! Soluta sit, ab facere sed at corporis ex?
        </Typography>
        <Typography variant="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          consequuntur aspernatur iusto fugit vitae doloremque recusandae quis
          repellat cum vel illo velit! Soluta sit, ab facere sed at corporis ex?
        </Typography>
      </section>
      <section className="about-call-to-action">
        <Typography variant={"h2"}>
          What are you waiting for? Your dogs play date is waiting.
        </Typography>
        <Typography variant={"h3"}>Check out our dogs online.</Typography>
        <Button btnText="Explore our dogs" route="/dogs" disabled={undefined} />
      </section>
    </section>
  );
}
