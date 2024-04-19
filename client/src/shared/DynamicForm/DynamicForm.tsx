import "./dynamicform.css";
import dogPhoto from "../../assets/images/dog-profile.png";

interface Props {
  questionText?: string;
  onChange?: (e: any) => void;
  value?: string;
  fieldType: any;
  ageData: any;
  breedData: any;
  style?: any;
  altImageText: string;
  dropDownType: string;
}

export default function DynamicForm({
  questionText,
  onChange,
  value,
  fieldType,
  ageData,
  breedData,
  altImageText,
  style,
  dropDownType,
}: Props) {
  const propsObj = {
    breedData: breedData,
    ageData: ageData,
    // personalityData:personalityData
  };

  console.log(dropDownType);
  return (
    <>
      <div className="ai-assistant-container" style={style}>
        <img
          className="dog-ai-assistant-image"
          src={dogPhoto}
          alt={altImageText}
        />
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
            {propsObj[dropDownType] &&
              propsObj[dropDownType]?.map((item: string | number) => (
                <option>{item}</option>
              ))}
          </select>
        )}
      </div>
    </>
  );
}
// need to do it so that
//1. an array for dropdowntypes
//2. can use this to choose which endoint to fetch  so dropdowntype && endpoint
