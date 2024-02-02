import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import useQuestionHook from "./hooks/useQuestionHook";
import { Question } from "@features";
import { Button } from "@shared";
import ADD_DOG from "graphql/mutations/ADD_DOG";
import "./signUp.css";

export default function Questions(initialAnswer = []) {
  // post answers and create a graph query
  // animate inputs and text
  const [addDog] = useMutation(ADD_DOG);
  const getAnswers = window.localStorage.getItem("answers") as string;
  const [answers, setAnswers] = useState<string[]>(
    [JSON.parse(getAnswers)] || initialAnswer
  );
  const [loggedin, setLoggedIn] = useState<boolean>(false);

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
    setAnswers((prevAnswers) => {
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

  const handleSubmit = (e: any) => {
    const [name, breed, age, personality] = answers;

    e.preventDefault();
    addDog({
      variables: {
        name: name,
        breed: breed,
        age: age,
        personality: personality,
      },
    });
    setLoggedIn(true);
    localStorage.clear();
  };

  return (
    <div className="questionText">
      <Question
        questionText={questionText[currentScreen]}
        onChange={(event) => handleAnswerChange(currentScreen, event)}
        value={answers[currentScreen] || ""}
        onSubmit={handleSubmit}
        questionLength={questionText.length}
        answersLength={answers.length}
        previousScreen={previousScreen}
        nextScreen={nextScreen}
      />
    </div>
  );
}
