import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import useQuestionHook from "../../features/SignUp/hooks/useQuestionHook";
import { Question } from "@features";
import ADD_DOG from "graphql/mutations/ADD_DOG";

import "./signUp.css";
import ALL_AGES from "graphql/queries/allAges/ALL_AGES";
import ALL_BREEDS from "graphql/queries/allBreeds/ALL_BREEDS";

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

// need to chnage this so email and password are not stored to local storage

const questionText = [
  "Hello There, I'm Woofus. Lets start with your dogs name?",
  "whats your dogs breed?",
  "whats your dogs age?",
  "whats your dogs personality?",
  "Enter your email address",
  "Enter your password",
  "confirm your password",
];

export default function Questions(initialAnswer = []) {
  const { currentScreen, nextScreen, previousScreen } =
    useQuestionHook(questionText);

  const { data, loading, error } = useQuery(ALL_AGES);
  const {
    data: breedData,
    loading: breedLoader,
    error: breedError,
  } = useQuery(ALL_BREEDS);
  console.log(data);

  // need to call all ages and breeds, combine query into one
  const [addDog] = useMutation(ADD_DOG);

  // post answers and create a graph query
  // animate inputs and text

  // save current screen index to local storage to handle refresh

  const [answers, setAnswers] = useState<string[]>(
    Array(questionText.length).fill("") || initialAnswer
  );

  // The useEffect hook is used here to perform side effects in functional components.
  //In this case, the effect is triggered when the component mounts.
  //It retrieves any previously stored answers from the local storage.
  //If there are stored answers, it updates the component state (answers) to reflect the stored data.
  //This ensures that if the user refreshes the page or navigates away and returns, their previous answers are restored.

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("answers") as string);
    if (storedAnswers) {
      // SET TO STATE
      setAnswers(storedAnswers);
    }
  }, []);

  // const [loggedin, setLoggedIn] = useState<boolean>(false);

  // change below to a hook

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    localStorage.setItem("answers", JSON.stringify(newAnswers));
  };

  const handleSubmit = (e: any) => {
    const [name, breed, age, personality, email, password, confirmPassword] =
      answers;
    e.preventDefault();
    addDog({
      variables: {
        name,
        breed,
        age,
        personality,
        email,
        password,
        confirmPassword,
      },
    });
    // setLoggedIn(true);
    localStorage.clear();
  };

  if (loading || breedLoader) {
    return <Loader loading={"Loading"} />;
  }

  if (error || breedError) {
    return <ErrorMessage error={error?.message} />;
  }

  return (
    <div className="questionText">
      <Question
        questionText={questionText[currentScreen]}
        onChange={(event) =>
          handleAnswerChange(currentScreen, event.target.value)
        }
        value={answers[currentScreen] || ""}
        fieldType={fieldType[currentScreen]}
        onSubmit={handleSubmit}
        answers={answers}
        previousScreen={previousScreen}
        nextScreen={nextScreen}
        ageData={data?.allAges.map((item: { age: number }) => item.age)}
        breedData={breedData?.allBreeds.map(
          (item: { breed: number }) => item.breed
        )}
      />
    </div>
  );
}
