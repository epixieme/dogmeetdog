import { Question } from "@features";
import { Button } from "@shared";
import useQuestionHook from "./useQuestionHook";
import "./signUp.css";
import { useEffect, useState, useRef } from "react";

export default function Questions(initialAnswer = []) {
  // post answers and create a graph query
  // animate inputs and text

  const getAnswers = window.localStorage.getItem("answers") as string;
  const [answers, setAnswers] = useState<string[]>(
   [JSON.parse(getAnswers)] || initialAnswer
  );

  useEffect(() => {
    window.localStorage.setItem("answers", JSON.stringify(answers));
  }, []);

  const { questionText, currentScreen, nextScreen, previousScreen } =
    useQuestionHook();
  // change below to a hook

  const handleAnswerChange = (
    index: number,
    event: { target: { value: string } }
  ) => {
    //new copy to avoid direct mutation
    // const newAnswers = [...answers];
    // //set the index of the new array to the input
    // newAnswers[index] = event.target.value;
    // setAnswers(newAnswers);
    // // Store the updated answers in local storage
    // localStorage.setItem("answers", JSON.stringify(newAnswers));
    setAnswers(prevAnswers => {
      // Create a new copy of the answers array
      const newAnswers = [...prevAnswers];
      // Set the value at the specified index
      newAnswers[index] = event.target.value;
      // Store the updated answers in local storage
      localStorage.setItem("answers", JSON.stringify(newAnswers));
      // Return the updated answers
      return newAnswers;
    });
  };

  return (
    <div className="questionText">
      <Question
        questionText={questionText[currentScreen]}
        onChange={(event) => handleAnswerChange(currentScreen, event)}
        value={answers[currentScreen] || ""}
      />

      <Button btnText={"<"} onClick={previousScreen} />
      <Button btnText={">"} onClick={nextScreen} />
    </div>
  );
}
