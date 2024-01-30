import { Question } from "@features";
import { Button } from "@shared";
import useQuestionHook from "./useQuestionHook";
import "./signUp.css";
import { useEffect, useState, useRef } from "react";

export default function Questions(initialAnswer = "") {
  //store answers  to local storage
  // post answers and create a graph query
  // animate
  // const inputRef = useRef(null)
  const [answer, setAnswer] = useState<string>("");
  // const [answer, setAnswer] = useState<string>(window.localStorage.getItem('answer') || initialAnswer);

  // to use local storage use the allanswers[previousScreen]
  // const [allAnswers, setAllAnswers] = useState<string[]>([]);
  // const getAnswers = window.localStorage.getItem("answers") as string;
  // const [allAnswers, setAllAnswers] = useState<string[]>(getAnswers? [JSON.parse(getAnswers)]:[]);
  // const [allAnswers, setAllAnswers] = useState<string[]>([]);
const [answers, setAnswers] =useState<string[]>([])
  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem('answers'));
        if (storedAnswers) {
          setAnswers(storedAnswers);
        }
  }, []);

  const { questionText, currentScreen, nextScreen, previousScreen } =
    useQuestionHook();
  // change below to a hook
  async function handleNext(index:number, event: { target: { value: string; }; }) {
    nextScreen()
    const newAnswers = [...answers];
        newAnswers[index] = event.target.value;
        setAnswers(newAnswers);
        // Store the updated answers in local storage
        localStorage.setItem('quizAnswers', JSON.stringify(newAnswers));
  }
  // async function handlePrevious() {
  //   previousScreen();
  // }

  return (
    <div className="questionText">
    
      <Question
        questionText={questionText[currentScreen]}
        // onChange={(e) => setAnswer(e.target.value)}
        onChange={(e) => setAllAnswers([...allAnswers, e.target.value])}
        value={answers[0] || ''}
      />
      <Button btnText={"<"} onClick={previousScreen} />
      <Button btnText={">"} onClick={handleNext} />
    </div>
  );
}

// import React, { useState, useEffect } from 'react';

// const Quiz = () => {
//   const [answers, setAnswers] = useState([]);

//   useEffect(() => {
//     // Fetch answers from local storage when component mounts
//     const storedAnswers = JSON.parse(localStorage.getItem('quizAnswers'));
//     if (storedAnswers) {
//       setAnswers(storedAnswers);
//     }
//   }, []);

//   const handleAnswerChange = (index, event) => {
//     const newAnswers = [...answers];
//     newAnswers[index] = event.target.value;
//     setAnswers(newAnswers);
//     // Store the updated answers in local storage
//     localStorage.setItem('quizAnswers', JSON.stringify(newAnswers));
//   };

//   return (
//     <div>
//       <h2>Quiz</h2>
//       <ol>
//         <li>
//           <label>
//             Question 1: What is the capital of France?
//             <input
//               type="text"
//               value={answers[0] || ''}
//               onChange={(event) => handleAnswerChange(0, event)}
//             />
//           </label>
//         </li>
//         <li>
//           <label>
//             Question 2: What is the largest planet in our solar system?
//             <input
//               type="text"
//               value={answers[1] || ''}
//               onChange={(event) => handleAnswerChange(1, event)}
//             />
//           </label>
//         </li>
//         <li>
//           <label>
//             Question 3: Who wrote "To Kill a Mockingbird"?
//             <input
//               type="text"
//               value={answers[2] || ''}
//               onChange={(event) => handleAnswerChange(2, event)}
//             />
//           </label>
//         </li>
//       </ol>
//     </div>
//   );
// };

// export default Quiz;
