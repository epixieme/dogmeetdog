import { Button } from "@shared";
import { SetStateAction, useState } from "react";

interface Props {
  questionText: string;
  onChange:()=>void
}

export default function Question({ questionText, onChange }: Props) {

  const [answers, setAnswers] = useState<string[]>([])
  console.log(answers)
  
  return (
    <form action="" className="question1-container">
      <label>{questionText}:</label>
      <input type="text" onChange={onChange}></input>
    </form>
  );
}