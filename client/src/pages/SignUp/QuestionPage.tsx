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

const dropDownType = [
  "",
  "breedData",
  "ageData",
  "personalityData",
  "",
  "",
  "",
];

// need to change this so email and password are not stored to local storage
//the below needs to be added to the database
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

  const {
    data: ageData,
    loading: ageLoader,
    error: ageError,
  } = useQuery(ALL_AGES);
  const {
    data: breedData,
    loading: breedLoader,
    error: breedError,
  } = useQuery(ALL_BREEDS);

  // need to call all ages and breeds, combine query into one
  const [addDog] = useMutation(ADD_DOG);
  // post answers and create a graph query
  // animate inputs and text

  const [answers, setAnswers] = useState<string[]>(
    Array(questionText.length).fill("") || initialAnswer
  );

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("answers") as string);
    if (storedAnswers) {
      // SET TO STATE
      setAnswers(storedAnswers);
    }
  }, []);

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
    localStorage.clear();
  };

  if (ageLoader || breedLoader) {
    return <Loader loading={"Loading"} />;
  }

  if (ageError) return <ErrorMessage error={ageError?.message} />;

  if (breedError) return <ErrorMessage error={breedError?.message} />;

  return (
    <div className="questionText">
      <Question
        questionText={questionText[currentScreen]}
        onChange={(event) =>
          handleAnswerChange(currentScreen, event.target.value)
        }
        value={answers[currentScreen] || ""}
        fieldType={fieldType[currentScreen]}
        dropDownType={dropDownType[currentScreen]} //needs to be
        onSubmit={handleSubmit}
        answers={answers}
        previousScreen={previousScreen}
        nextScreen={nextScreen}
        ageData={ageData?.allAges.map((item: { age: number }) => item.age)}
        breedData={breedData?.allBreeds.map(
          (item: { breed: string }) => item.breed
        )}
      />
    </div>
  );
}
