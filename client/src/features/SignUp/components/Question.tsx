import { Button } from "@shared";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

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
  questionText,
  onChange,
  value,
  onSubmit,
  answers,
  previousScreen,
  nextScreen,
  fieldType,
  ageData,
}: Props) {
  return (
    <form className="question1-container" onSubmit={onSubmit}>
      <label>{questionText}:</label>
      {fieldType === "text" ||
      fieldType === "email" ||
      fieldType === "password" ? (
        <input type={fieldType} onChange={onChange} value={value}></input>
      ) : (
        <select defaultValue={"Select"} onChange={onChange}>
          {questionText?.includes("age") &&
            ageData.map(
              (
                age:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined
              ) => <option>{age}</option>
            )}
        </select>
      )}

      <Button btnText={"<"} onClick={previousScreen} />
      {answers.some(item=>item == "") ? (
        <Button btnText={">"} onClick={nextScreen} />
      ) : (
        <button type="submit">test</button>
      )}
    </form>
  );
}
