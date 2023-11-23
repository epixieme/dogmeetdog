import Button from "../../components/Shared/Button/Button";

interface Props {
  name: string;
  age: string;
  breed: string;
  sex: string;
  owner: string;
}

export default function Question1({ name, age, breed, sex, owner }: Props) {
  return (
    <form action="" className="question1-container">
      <label>{name}:</label>
      <input type="text"></input>
      <label>{age}:</label>
      <input type="text"></input>
      <label>{breed}:</label>
      <input type="text"></input>
      <label>{sex}:</label>
      <input type="text"></input>
      <label>{owner}:</label>
      <input type="text"></input>

      <Button route="/question2" />
    </form>
  );
}
