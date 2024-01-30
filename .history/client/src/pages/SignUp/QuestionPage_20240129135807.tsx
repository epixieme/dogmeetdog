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
  const [answer, setAnswer] = useState<string>("");
  // const [answer, setAnswer] = useState<string>(window.localStorage.getItem('answer') || initialAnswer);
 
  // to use local storage use the allanswers[previousScreen]
  // const [allAnswers, setAllAnswers] = useState<string[]>([]);
  const getAnswers = window.localStorage.getItem('answers') as string
  const [allAnswers, setAllAnswers] = useState<string[]>(getAnswers? [JSON.parse(getAnswers)]:[]);
  console.log(allAnswers);
  useEffect(() => {
    const answers = JSON.stringify(allAnswers)   
    window.localStorage.setItem("answer", answer);
    window.localStorage.setItem("answers", answers);
  },[answer]);
  
  const { questionText, currentScreen, nextScreen, previousScreen } = useQuestionHook();
  // change below to a hook
  async function handleNext() {
    setAnswer('')
        setAllAnswers([
          ...allAnswers,
          answer
        ]);
   
  }
  // async function handlePrevious() {
  //   previousScreen();
  // }

  return (
    <div className="questionText">
      <Question
        questionText={questionText[currentScreen]}
        // onChange={(e) => setAnswer(e.target.value)}
        onChange={e => setAnswer(e.target.value)}
        value ={allAnswers[currentScreen]}
        
        // onChange={(e) =>
        //   setUser({...user, mobile_number: e.target.value })
        // }
      />
       <Button btnText={"<"} onClick={previousScreen} />
      <Button btnText={">"} onClick={handleNext} />
    </div>
  );
}

// import { useState } from 'react';

// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//       setName('')
//         setArtists([
//           ...artists,
//           { id: nextId++, name: name }
//         ]);
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

