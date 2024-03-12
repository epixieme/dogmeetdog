import "./dynamicform.css";
interface Props {
  questionText?: string;
  onChange?: (e: any) => void;
  value?: string;
  answers: string[];
  fieldType: any;
  ageData: any;
}

export default function DynamicForm({
  questionText,
  onChange,
  value,
  fieldType,
  ageData,
}: Props) {
  return (
    <>
      <label className="question-labels">{questionText}:</label>
      {fieldType === "text" ||
      fieldType === "email" ||
      fieldType === "password" ? (
        <input type={fieldType} onChange={onChange} value={value}></input>
      ) : (
        <select
          defaultValue={"Select"}
          onChange={onChange}
          className="drop-down-menu"
        >
          {questionText?.includes("age") &&
            ageData.map((age: any) => <option>{age}</option>)}
        </select>
      )}
    </>
  );
}
