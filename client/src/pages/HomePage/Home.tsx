
import { Button } from "@shared";
import './home.css'
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
