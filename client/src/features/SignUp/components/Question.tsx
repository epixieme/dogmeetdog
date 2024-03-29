import React, { useEffect, useState } from "react";
import "./question.css";
import { Button } from "@shared";
import DynamicForm from "shared/DynamicForm/DynamicForm";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  questionText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  answers: string[];
  previousScreen: () => void;
  nextScreen: () => void;
  fieldType: any;
  ageData: any;
}

const Question: React.FC<Props> = ({
  onSubmit,
  answers,
  previousScreen,
  nextScreen,
  fieldType,
  ageData,
  questionText,
  value,
  onChange,
}: Props) => {
  // State variable to track whether the button has been clicked
  const [buttonClicked, setButtonClicked] = useState(false);

  // Define the spring animation
  const { y } = useSpring({
    from: { y: 0 },
    to: { y: buttonClicked ? 200 : 0 }, // Apply animation when button is clicked
  });

  // Function to handle the click event
  const handleClick = () => {
    // Update the state to indicate that the button has been clicked
    nextScreen();
    setButtonClicked(true);
  };

  useEffect(() => {
    setButtonClicked(false);
  }, [buttonClicked]);

  return (
    <form className="question1-container" onSubmit={onSubmit}>
      <DynamicForm
        fieldType={fieldType}
        ageData={ageData}
        questionText={questionText}
        value={value}
        onChange={onChange}
        animated={animated}
        style={{ transform: y.to((y) => `translateY(${y}px)`) }} // Apply animation style
      />
      <div className="question-buttons">
        <Button btnText={"<"} onClick={previousScreen} />
        {answers.some((item) => item === "") ? (
          <Button btnText={">"} onClick={handleClick} />
        ) : (
          <button type="submit">Next</button>
        )}
      </div>
    </form>
  );
};

export default Question;
