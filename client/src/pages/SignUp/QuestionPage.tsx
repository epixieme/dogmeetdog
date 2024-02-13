import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import useQuestionHook from "../../features/SignUp/hooks/useQuestionHook";
import { Question } from "@features";
import ADD_DOG from "graphql/mutations/ADD_DOG";

import "./signUp.css";
import ALL_AGES from "graphql/queries/allAges/ALL_AGES";
import { ErrorMessage, Loader } from "@shared";


// add these arrays to mongodb
const fieldType = [
  "text",
  "select",
  "select",
  "select",
  "email",
  "password",
  "password",
];

const questionText = [
  "whats your dogs name?",
  "whats your dogs Breed?",
  "whats your dogs age?",
  "whats your dogs personality?",
  "Enter your Email Address",
  "Enter your Password",
  "confirm your Password",
];

export default function Questions(initialAnswer = []) {
  const { currentScreen, nextScreen, previousScreen } =
  useQuestionHook(questionText);

  const { data, loading, error } = useQuery(ALL_AGES);
  const [addDog] = useMutation(ADD_DOG);

  // post answers and create a graph query
  // animate inputs and text

  // save current screen index to local storage to handle refresh

  const getAnswers = window.localStorage.getItem("answers") as string;

  const [answers, setAnswers] = useState<string[]>(
    Array(questionText.length).fill("")
  );


  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("answers") as string);
    if (storedAnswers) {
      setAnswers(storedAnswers);
    }
  }, []);


  // const [loggedin, setLoggedIn] = useState<boolean>(false);


  // change below to a hook

  const handleAnswerChange = (
    index: number,
    value: string
  ) => {
    const newAnswers = [...answers];
    newAnswers[index] = value
    setAnswers(newAnswers);
    localStorage.setItem("answers", JSON.stringify(newAnswers));

  };

  const handleSubmit = (e: any) => {
    const [name, breed, age, personality, email, password, confirmPassword] = answers;

    e.preventDefault();
    addDog({
      variables: {
        name: name,
        breed: breed,
        age: age,
        personality: personality,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      },
    });
    // setLoggedIn(true);
    localStorage.clear();
  };

  if (loading) {
    return <Loader loading={"Loading"} />;
  }

  if (error) {
    return <ErrorMessage error={error.message} />;
  }

  return (
    <div className="questionText">
      <Question
        questionText={questionText[currentScreen]}
        onChange={(event) => handleAnswerChange(currentScreen, event.target.value)}
        value={answers[currentScreen] || ""}
        fieldType={fieldType[currentScreen]}
        onSubmit={handleSubmit}
        answers={answers}
        previousScreen={previousScreen}
        nextScreen={nextScreen}
        ageData={data?.allAges.map((item: { age: number }) => item.age)}
      />
    </div>
  );
}
