import React, { useEffect, useState } from "react";
import "./question.css";
import { Button } from "@shared";
import DynamicForm from "shared/DynamicForm/DynamicForm";
import { useSpring, animated } from "@react-spring/web";
import { Opacity } from "@mui/icons-material";

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
  breedData: string[];
}

const Question: React.FC<Props> = ({
  onSubmit,
  answers,
  previousScreen,
  nextScreen,
  fieldType,
  ageData,
  breedData,
  questionText,
  value,
  onChange,
}: Props) => {
  // State variable to track whether the button has been clicked
  const [buttonClicked, setButtonClicked] = useState(false);

  // Define the spring animation
  const { opacity } = useSpring({
    opacity: buttonClicked ? 0 : 1, // Apply animation when button is clicked
    config: { duration: 1000 }, // Set animation duration
    onRest: () => {
      // Reset the buttonClicked state after the animation completes
      setButtonClicked(false);
    },
  });

  // Function to handle the click event
  const handleClick = () => {
    // Update the state to indicate that the button has been clicked
    setButtonClicked(true);
    nextScreen();
  };

  return (
    <form className="question1-container" onSubmit={onSubmit}>
      <animated.div style={{ opacity, height: 100 }}>
        {!buttonClicked && (
          <DynamicForm
            fieldType={fieldType}
            ageData={ageData}
            breedData={breedData}
            questionText={questionText}
            value={value}
            onChange={onChange}
            altImageText={"Ai Assistant Text"} // Apply animation style
          />
        )}
      </animated.div>
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
