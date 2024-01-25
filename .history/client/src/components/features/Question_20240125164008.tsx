import { Button } from "@shared";
import {  useState } from "react";

interface Props {
  questionText: string;


}
const [answers, setAnswers] = useState<string[]>([]);
console.log(answers);

export default function Question({ questionText}: Props) {
  return (
    <form action="" className="question1-container">
      <label>{questionText}:</label>
      <input type="text" ></input>
    </form>
  );
}
