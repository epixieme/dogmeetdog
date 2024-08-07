import { Button } from "@shared";
import "../styles/home.css";
import Typography from "shared/Typography/Typography";

export default function HomePage() {
  return (
    <>
      <section className="home-container">
        <Typography variant={"h3"}>Sign up today and find your pupster a play date</Typography>
        <Button btnText={"Find your dog a play date"} route="/questions" disabled={false} />
      </section>
    </>
  );
}
