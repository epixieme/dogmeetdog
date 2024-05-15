import "../styles/dynamicForm.css";
import dogPhoto from "../../../assets/images/dog-profile.png";

interface Props {
  questionText?: string;
  onChange?: (e: any) => void;
  value?: string;
  fieldType: string;
  ageData: number[];
  breedData: string[];
  personalityData: string[];
  altImageText: string;
  dropDownType: string;
}

interface DropDownData {
  breedData: string[];
  ageData: number[];
  personalityData: string[];
}

export default function DynamicForm({ questionText, onChange, value, fieldType, ageData, breedData, personalityData, altImageText, dropDownType }: Props) {
  const dropDownData: DropDownData = {
    breedData: breedData,
    ageData: ageData,
    personalityData: personalityData,
  };

  const dropDownContent = dropDownData[dropDownType as keyof DropDownData];

  return (
    <div className="ai-assistant-container">
      <img className="dog-ai-assistant-image" src={dogPhoto} alt={altImageText} />
      <label className="question-labels">{questionText}:</label>

      {fieldType === "text" || fieldType === "email" || fieldType === "password" ? (
        <input type={fieldType} onChange={onChange} value={value} placeholder={fieldType} aria-label={questionText}></input>
      ) : (
        <select required defaultValue={"Select"} onChange={onChange} className="drop-down-menu">
          {dropDownContent && dropDownContent?.map((item: string | number) => <option>{item}</option>)}
        </select>
      )}
    </div>
  );
}
