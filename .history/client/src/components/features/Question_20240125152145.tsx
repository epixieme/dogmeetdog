import { Button } from "@shared";
import { SetStateAction, useState } from "react";

interface Props {
  questionText: string;
  answer:string,
  nextScreen:()=>void
  

}

export default function Question({ questionText, nextScreen }: Props) {

  const [answers, setAnswers] = useState<string[]>([])
  console.log(answers)

  const nameChangeHandler = (e: { target: { value: SetStateAction<string[]>; }; }) => {
    setAnswers(e.target.value)
 };

  
  return (
    <form action="" className="question1-container">
      <label>{questionText}:</label>
      <input type="text" value={answers}></input>
      <Button btnText={">"} onClick={() =>nextScreen('test')} />
    </form>
  );
}
