import { Question } from "@features";
import { Button } from "@shared";
import useQuestionHook from "./useQuestionHook";
import "./signUp.css";
import { useEffect, useState, useRef } from "react";

export default function Questions(initialAnswer = '') {
  //store answers  to local storage
  // post answers and create a graph query
  // animate
// const inputRef = useRef(null)
  // const [answer, setAnswer] = useState<string>("");
  const [answer, setAnswer] = useState<string>(window.localStorage.getItem('answer') || initialAnswer);
 
  // to use local storage use the allanswers[previousScreen]
  // const [allAnswers, setAllAnswers] = useState<string[]>([]);
  const getAnswers = window.localStorage.getItem('answers') as string
  const [allAnswers, setAllAnswers] = useState<string[]>(getAnswers? [JSON.parse(getAnswers)]:[]);
  console.log(answers);
  useEffect(() => {
    const answers = JSON.stringify(allAnswers)   
    window.localStorage.setItem("answer", answer);
    window.localStorage.setItem("answers", answers);
  },[allAnswers]);
  
  const { questionText, currentScreen, nextScreen, previousScreen } = useQuestionHook();
  // change below to a hook
  async function handleNext() {
    nextScreen();
    setAnswer('')
    // inputRef.current.reset()
    // if(!answer){
    //  console.log(answer)
    //  setAnswer(' ')

    // }
    setAllAnswers((prev) => [...prev, answer])
   
  }
  // async function handlePrevious() {
  //   previousScreen();
  // }

  return (
    <div className="questionText">
      <Question
        questionText={questionText[currentScreen]}
        onChange={(e) => setAnswer(e.target.value)}
        value ={answer}
        
      />
       <Button btnText={"<"} onClick={previousScreen} />
      <Button btnText={">"} onClick={handleNext} />
    </div>
  );
}