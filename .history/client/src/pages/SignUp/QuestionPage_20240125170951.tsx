import { Question } from "@features";
import { Button } from "@shared";
import useQuestionHook from "./useQuestionHook";
import "./signUp.css";
import { useState } from "react";

export default function Questions() {
  //store answers  to local storage
  // post answers and create a graph query
  // animate

  const [answer, setAnswer] = useState<string>('')
  const [allAnswers, setAllAnswers] = useState<string[]>([])
  console.log(allAnswers)

  console.log(answer)
  const { questionText, currentScreen, nextScreen } = useQuestionHook();

  async function handleAnswers(){
setAllAnswers(prev=>[...prev, answer])
 setAnswer('')
  nextScreen()
  }

  return (
    <div className="questionText">
      <Question
        questionText={questionText[currentScreen]}
        onChange={(e)=>setAnswer(e.target.value)}
        value={answer}

      />
      <Button btnText={">"} onClick={handleAnswers}  />
    </div>
  );
}
