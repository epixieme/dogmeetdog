import { Question } from "@features";
import { Button } from "@shared";
import useQuestionHook from "./useQuestionHook";
import "./signUp.css";
import { useEffect, useState, useRef } from "react";

export default function Questions(initialAnswer = "") {
  //store answers  to local storage
  // post answers and create a graph query
  // animate
  
  const getAnswers = window.localStorage.getItem("answers") as string;
  const [answers, setAnswers] = useState<string[]>(getAnswers? [JSON.parse(getAnswers)]:[]);
  const [answered, setAnswered] = useState<boolean>(false);

  useEffect(() => {
    window.localStorage.setItem("answers", JSON.stringify(answers));
  }, []);

  const { questionText, currentScreen, nextScreen, previousScreen } =
    useQuestionHook();
  // change below to a hook
  async function handleNext() {
    nextScreen()
    
   setAnswered(true)
    // setAnswer("");
    // setAnswers([...answers, answer]);
  }
  const handleAnswerChange = (index:number, event:any) => {
        const newAnswers = [...answers];
        newAnswers[index] = event.target.value;
        setAnswers(newAnswers);
        // Store the updated answers in local storage
        localStorage.setItem('answers', JSON.stringify(newAnswers));
      };

  return (
    <div className="questionText">
    
      <Question
        questionText={questionText[currentScreen]}
        onChange={(event) => handleAnswerChange(currentScreen, event)}
        value={answers[currentScreen] || ''}
      
        
       
      />
      {/* <Question
        questionText={questionText[1]}
        onChange={(event) => handleAnswerChange(1, event)}
        value={answers[1] || ''}
      
      /> */}
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
