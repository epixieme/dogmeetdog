import { Question } from "@features";
import { Button } from "@shared";
import useQuestionHook from "./useQuestionHook";
import "./signUp.css";
import { useState } from "react";

export default function Questions() {
  //store answers  to local storage
  // post answers and create a graph query
  // animate
  const { questionText, currentScreen, nextScreen } = useQuestionHook();

  return (
    <div className="questionText">
      <Question
        questionText={questionText[currentScreen]}
        onChange={(e)=>e.target.value}
      />
      <Button btnText={">"} onClick={nextScreen} />
    </div>
  );
}
