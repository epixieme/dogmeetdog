import { useState } from "react";

interface Props {
  questionText: string;
  answer:string

}

export default function Question({ questionText, answer }: Props) {

  const [answers, setAnswers] = useState<string[]>([])
  console.log(answers)

  const nameChangeHandler = (e) => {
    setAnswers(e.target.value)
 };

  
  return (
    <form action="" className="question1-container">
      <label>{questionText}:</label>
      <input type="text" value={answers}></input>
    </form>
  );
}
