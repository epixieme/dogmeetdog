import { Question } from "@features";
import { Button } from "@shared";
import useQuestionHook from "./useQuestionHook";
import "./signUp.css";


export default function Questions() {
  //store answers  to local storage
  // post answers and create a graph query
  // animate
  const { questionText, currentScreen, nextScreen } = useQuestionHook();

  return (
    <div className="questionText">
      <Question questionText={questionText[currentScreen]} answer={""} nextScreen={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <Button btnText={">"} onClick={() =>nextScreen('test')} />
    </div>
  );
}