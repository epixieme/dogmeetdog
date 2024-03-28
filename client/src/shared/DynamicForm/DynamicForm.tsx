import "./dynamicform.css";
import dogPhoto from "../../assets/images/dog-profile.png";
interface Props {
  questionText?: string;
  onChange?: (e: any) => void;
  value?: string;
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
      <div className="ai-assistant-container">
        <img
          className="dog-ai-assistant-image"
          src={dogPhoto}
          alt="Picture of wufus the dog"
        />
        <label className="question-labels">{questionText}:</label>
      </div>
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
