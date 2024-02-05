import { Button } from "@shared";

interface Props {
  questionText?: string;
  onChange?: (e: any) => void;
  value?: string;
  onSubmit: (e: any) => void;
  questionLength: number;
  answersLength: number;
  previousScreen: () => void;
  nextScreen: () => void;
  fieldType: any;
}

// how to display a new input field on next so it can be saved to local storage
export default function Question({
  questionText,
  onChange,
  value,
  onSubmit,
  questionLength,
  answersLength,
  previousScreen,
  nextScreen,
  fieldType,
}: Props) {
  return (
    <form className="question1-container" onSubmit={onSubmit}>
      <label>{questionText}:</label>
      {fieldType === "input" ? (
        <input type="text" onChange={onChange} value={value}></input>
      ) : (
        <select>
          <option value="test"></option>
        </select>
      )}

      <Button btnText={"<"} onClick={previousScreen} />

      {questionLength !== answersLength ? (
        <Button btnText={">"} onClick={nextScreen} />
      ) : (
        <button type="submit">test</button>
      )}
    </form>
  );
}
