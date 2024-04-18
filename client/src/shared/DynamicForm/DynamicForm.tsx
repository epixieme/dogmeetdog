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
}: Props) {
  // const questionText ={
  //   name:"Hello There, I'm Woofus. Lets start with your dogs name?",
  //   breed:"whats your dogs breed?",
  //   age: "whats your dogs age?",
  //   personality:  "whats your dogs personality?",
  //   email:"Enter your email address",
  //   password:"Enter your password",
  //   confirmPassword: "confirm your password",
  // }

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
            {/* if question label includles age? */}
            {questionText?.includes("age") &&
              ageData.map((age: any) => <option>{age}</option>)}

            {questionText?.includes("breed") &&
              breedData.map((breed: any) => <option>{breed}</option>)}
          </select>
        )}
      </div>
    </>
  );
}
