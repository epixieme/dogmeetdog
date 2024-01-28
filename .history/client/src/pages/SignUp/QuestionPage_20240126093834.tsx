import { Question } from "@features";
import { Button } from "@shared";
import useQuestionHook from "./useQuestionHook";
import "./signUp.css";
import { useEffect, useState } from "react";

export default function Questions(initialAnswer = "") {
  //store answers  to local storage
  // post answers and create a graph query
  // animate

  // const [answer, setAnswer] = useState<string>("");
  const [answer, setAnswer] = useState<string>(window.localStorage.getItem('answer') || initialAnswer);
  // to use local storage use the allanswers[previousScreen]
  const [allAnswers, setAllAnswers] = useState<string[]>([]);
  console.log(allAnswers);
  useEffect(() => {
    window.localStorage.setItem("answer", answer);
  }, []);
  console.log(answer);
  const { questionText, currentScreen, nextScreen } = useQuestionHook();
  // change below to a hook
  async function handleAnswers() {
    setAllAnswers((prev) => [...prev, answer]);
    setAnswer("");
    nextScreen();
  }

  return (
    <div className="questionText">
      <Question
        questionText={questionText[currentScreen]}
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}
      />
      <Button btnText={">"} onClick={handleAnswers} />
    </div>
  );
}
