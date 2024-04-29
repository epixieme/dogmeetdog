import { Button } from "@shared";
import "../styles/home.css";
import Typography from "shared/typography/Typography";
export default function HomePage() {
  return (
    <>
      <section className="home-container">
        <p>Sign Up Today and find your pupster a play date</p>
        <Button
          btnText={"Find your dog a play date"}
          route="/questions"
          disabled={undefined}
        />
        <Typography variant={"h1"} children={undefined} className={""}>
          Test
        </Typography>
      </section>
    </>
  );
}
