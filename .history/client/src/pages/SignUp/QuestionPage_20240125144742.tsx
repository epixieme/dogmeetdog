import { Question } from "@features";

import useQuestionHook from "./useQuestionHook";
import "./signUp.css";

export default function Questions() {
  //store answers  to local storage
  // post answers and create a graph query
  // animate
  const { questionText, currentScreen, nextScreen } = useQuestionHook();

  return (
    <div className="questionText">
      <Question questionText={questionText[currentScreen]} />
     
    </div>
  );
}
