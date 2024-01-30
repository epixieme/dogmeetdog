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
  const [answer, setAnswer] = useState<string>(
    window.localStorage.getItem("answer") || initialAnswer
  );
  console.log(answer);
  // to use local storage use the allanswers[previousScreen]
  // const [allAnswers, setAllAnswers] = useState<string[]>([]);
  const getAnswers = window.localStorage.getItem("answers") as string;
  const [allAnswers, setAllAnswers] = useState<string[]>(
    getAnswers ? [JSON.parse(getAnswers)] : []
  );
  // console.log(allAnswers);
  useEffect(() => {
    const answers = JSON.stringify(allAnswers);
    window.localStorage.setItem("answer", answer);
    window.localStorage.setItem("answers", answers);
  });

  console.log(answer);
  const { questionText, currentScreen, nextScreen, previousScreen } =
    useQuestionHook();
  // change below to a hook
  async function handleNext() {
    setAllAnswers((prev) => [...prev, answer]);
    setAnswer("");
    nextScreen();
  }
  // async function handlePrevious() {
  //   previousScreen();
  // }

  return (
    <div className="questionText">
      <Question
        questionText={questionText[currentScreen]}
        onChange={(e) => setAllAnswers(prev=>[...prev,e.target.value])}
        value={allAnswers[currentScreen]}
      />
      <Button btnText={"<"} onClick={previousScreen} />
      <Button btnText={">"} onClick={handleNext} />
    </div>
  );
}
