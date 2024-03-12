import "./question.css";

import { Button } from "@shared";
import DynamicForm from "shared/DynamicForm/DynamicForm";
interface Props {
  questionText?: string;
  onChange?: (e: any) => void;
  value?: string;
  onSubmit: (e: any) => void;
  answers: string[];
  previousScreen: () => void;
  nextScreen: () => void;
  fieldType: any;
  ageData: any;
}

// how to display a new input field on next so it can be saved to local storage
export default function Question({
  onSubmit,
  answers,
  previousScreen,
  nextScreen,
  fieldType,
  ageData,
  questionText,
}: Props) {
  return (
    <form className="question1-container" onSubmit={onSubmit}>
      <DynamicForm
        answers={answers}
        fieldType={fieldType}
        ageData={ageData}
        questionText={questionText}
      />
      <div className="question-buttons">
        <Button btnText={"<"} onClick={previousScreen} />

        {answers.some((item) => item == "") ? (
          <Button btnText={">"} onClick={nextScreen} />
        ) : (
          <button type="submit">Next</button>
        )}
      </div>
    </form>
  );
}
