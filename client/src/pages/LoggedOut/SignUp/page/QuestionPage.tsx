import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import useQuestionHook from "../../../../features/SignUp/hooks/useQuestionHook";

import CREATE_USER from "graphql/mutations/CREATE_USER";

import "../styles/signUp.css";
import ALL_AGES from "graphql/queries/allAges/ALL_AGES";
import ALL_BREEDS from "graphql/queries/allBreeds/ALL_BREEDS";
import ALL_PERSONALITY_TYPES from "graphql/queries/allPersonalityTypes/ALL_PERSONALITY_TYPES";

import { ErrorMessage, Loader } from "@shared";
import { useNavigate } from "react-router";
import SignUpQuestion from "features/SignUp/components/SignUpQuestion";
import { ALL_DOGS } from "@queries";

// add these arrays to mongodb
const fieldType = ["file", "text", "select", "select", "select", "email", "password", "password"];

const dropDownType = ["", "", "breedData", "ageData", "personalityData", "", "", ""];

// need to change this so email and password are not stored to local storage
//the below needs to be added to the database
const questionText = [
  "Hello There, I'm Woofus. Lets get started Can you upload a photo?",
  "Great thanks, Next can you tell us your dogs name?",
  "Thanks, nearly there, whats {names} breed?",
  "What's your dogs age?",
  "What's your dogs personality?",

  // these to be moved to an email a sign up email and password screen. may need to merge createuser and adddog queries
  "Enter your email address",
  "Enter your password",
  "Confirm your password",
];

export default function QuestionPage({ initialAnswer = [] }: any) {
  const navigate = useNavigate();
  const { currentScreen, nextScreen, previousScreen } = useQuestionHook(questionText);

  const { data: ageData, loading: ageLoader, error: ageError } = useQuery(ALL_AGES);
  const { data: breedData, loading: breedLoader, error: breedError } = useQuery(ALL_BREEDS);

  const { data: personalityData, loading: personalityLoader, error: personalityError } = useQuery(ALL_PERSONALITY_TYPES);

  const [error, setError] = useState("");
  console.log(error);

  // need to call all ages and breeds, combine query into one
  const [createUser] = useMutation(CREATE_USER);

  // const [createUser] = useMutation(CREATE_USER, {
  //   refetchQueries: [{ query: ALL_DOGS }],
  //   onError: (error) => {
  //     const messages = error.graphQLErrors.map((e) => e.message).join("\n");
  //     setError(messages);
  //   },
  // });
  // post answers and create a graph query
  // animate inputs and text

  const [answers, setAnswers] = useState<string[]>(Array(questionText.length).fill("") || initialAnswer);

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
    const [name, breed, age, personality, email, password, confirmPassword] = answers;
    e.preventDefault();
    createUser({
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
    navigate("/login");
  };

  if (ageLoader || breedLoader || personalityLoader) {
    return <Loader loading={"Loading"} />;
  }

  if (ageError) return <ErrorMessage error={ageError?.message} />;

  if (breedError) return <ErrorMessage error={breedError?.message} />;
  if (personalityError) return <ErrorMessage error={personalityError?.message} />;

  return (
    <div className="questionText">
      <SignUpQuestion
        questionText={questionText[currentScreen]}
        onChange={(event) => handleAnswerChange(currentScreen, event.target.value)}
        value={answers[currentScreen] || ""}
        fieldType={fieldType[currentScreen]}
        dropDownType={dropDownType[currentScreen]} //needs to be
        onSubmit={handleSubmit}
        answers={answers}
        previousScreen={previousScreen}
        nextScreen={nextScreen}
        ageData={ageData?.allAges.map((item: { age: number }) => item.age)}
        breedData={breedData?.allBreeds.map((item: { breed: string }) => item.breed)}
        personalityData={personalityData?.allPersonalityTypes.map((item: { personality: string }) => item.personality)}
      />
    </div>
  );
}
