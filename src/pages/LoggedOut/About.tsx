import Button from "../../components/Shared/Button/Button";
import bgImg from "../../assets/images/about-hero-image.jpg";

export default function About() {
  return (
    <section className="about-container">
      <img src={bgImg} className="about-hero-img" />
      <section className="about-content">
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          consequuntur aspernatur iusto fugit vitae doloremque recusandae quis
          repellat cum vel illo velit! Soluta sit, ab facere sed at corporis ex?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque culpa
          maiores error sunt repudiandae quae repellendus aliquid fuga! Id aut
          asperiores iure doloremque voluptatibus sint rerum obcaecati cum, ea
          sapiente.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos
          quas sit in quis eaque officia quam omnis facere voluptate fugiat
          molestiae asperiores ad, illum, molestias iure tempora voluptatibus
          temporibus!
        </p>
      </section>
      <section className="about-call-to-action">
        <h2>What are you waiting for? Your dogs play date is waiting.</h2>
        <h3>Check out our doggys online.</h3>
        <Button btnText="Explore our dogs" route="/dogs" />
      </section>
    </section>
  );
}
