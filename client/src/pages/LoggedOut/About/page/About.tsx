import { Button } from "@shared";
import backgroundImage from "../assets/about-hero-image-removebg.png";
import heart from "../assets/heart-removebg-preview.png";
import "../styles/about.css";

import Typography from "shared/Typography/Typography";
export default function About() {
  return (
    <section className="about-container">
      <section className="about-content-wrapper">
        <section className="about-content">
          <div className="image-wrapper">
            {/* <div style={{ background: "white", borderRadius: "100%", height: "50px", width: "50px", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
              <img src={heart} style={{ width: "40px" }} />
            </div> */}
            <img src={backgroundImage} className="about-hero-img" />
          </div>
          <div className="welcome-content">
            <Typography variant="h2" style={{ textAlign: "left", color: "black" }}>
              <span style={{ color: "#106048", textShadow: "2px 1px 4px white", fontSize: 50 }}>Welcome </span>
              <span style={{ color: "#E71A88", textShadow: "2px 1px 4px white", fontSize: 50 }}>2 </span>
              <span style={{ color: "#106048", textShadow: "2px 1px 4px white", fontSize: 50 }}>DogMeetDog</span>
            </Typography>
            <Typography variant="body">
              At DogMeetDog, we're passionate about bringing dogs and their owners together for fun and exciting play dates. Our mission is to create a vibrant community where dogs can socialize,
              exercise, and build lasting friendships, all while providing a safe and enjoyable experience for everyone involved.
            </Typography>
            <Typography variant="h3">Our Story</Typography>
            <Typography variant="body">
              DogMeetDog was founded by a group of dedicated dog lovers who recognized the need for a centralized platform where dog owners could connect and organize play dates for their furry
              friends. Inspired by the joy and energy that dogs bring to our lives, we set out to create a space where dogs of all breeds, sizes, and personalities could come together to play,
              explore, and bond.
            </Typography>
          </div>
        </section>
        <section className="about-content-main">
          <Typography variant="h3"> Why Choose DogMeetDog?</Typography>

          <Typography variant="body">
            At DogMeetDog, we prioritize the well-being and happiness of both dogs and their owners. We believe that every dog deserves the opportunity to socialize and engage in enriching activities,
            and we strive to create a positive and inclusive community where all dogs are welcome. With our commitment to safety, transparency, and responsible dog ownership, you can trust that your
            experience with PawsPlay will be both enjoyable and rewarding.
          </Typography>
          <Typography variant="h3"> Get Involved</Typography>

          <Typography variant="body">
            Ready to join the DogMeetDog community? Sign up for free today and start connecting with fellow dog lovers in your area. Whether you're hosting a play date, attending a meet-up, or simply
            sharing photos and stories of your adventures with your four-legged friend, we can't wait to welcome you to the pack!
          </Typography>
        </section>
      </section>
      <section className="about-call-to-action">
        <Typography variant={"h2"}>Get your tail wagging and check out our dogs online.</Typography>

        <Button btnText="Explore our dogs" route="/dogs" disabled={undefined} />
      </section>
    </section>
  );
}
