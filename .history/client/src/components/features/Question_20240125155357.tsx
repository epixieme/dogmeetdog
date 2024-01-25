import { Button } from "@shared";
import { SetStateAction, useState } from "react";

interface Props {
  questionText: string;
  nextScreen:()=>void
  

}

export default function Question({ questionText, nextScreen }: Props) {

  const [answers, setAnswers] = useState<string[]>([])
  console.log(answers)


  
  return (
    <form action="" className="question1-container">
      <label>{questionText}:</label>
      <input type="text" onChange={(e)=>setAnswers(prevState=>[...prevState, e.target.value])}></input>
    </form>
  );
}
