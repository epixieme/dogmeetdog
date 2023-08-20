import Button from "../components/Button";

export default function Question1() {
  return (
    <form action="" className="question1-container">
      <label>Dogs Name:</label>
      <input type="text"></input>
      <label>Age:</label>
      <input type="text"></input>
      <label>Breed:</label>
      <input type="text"></input>
      <label>Male/Female:</label>
      <input type="text"></input>
      <label>Owned By:</label>
      <input type="text"></input>

      <Button route ="/question2"/>
      
    </form>
  );
}
