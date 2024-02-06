import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import useQuestionHook from "./hooks/useQuestionHook";
import { Question } from "@features";
import ADD_DOG from "graphql/mutations/ADD_DOG";
import "./signUp.css";

export default function Questions(initialAnswer = []) {
  
  const fieldType = ["input", "select", "select", "select"];
  const questionText = [
    "whats your dogs name?",
    "whats your dogs Breed?",
    "whats your dogs age?",
    "whats your dogs personality?",
  ];
  const { ageData, loading, error } = useQuery(DOG_AGES);
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

  const { currentScreen, nextScreen, previousScreen } =
    useQuestionHook(questionText);

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
        fieldType={fieldType[currentScreen]}
        onSubmit={handleSubmit}
        questionLength={questionText.length}
        answersLength={answers.length}
        previousScreen={previousScreen}
        nextScreen={nextScreen}
      />
    </div>
  );
}
