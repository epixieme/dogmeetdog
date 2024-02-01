import { Button } from "@shared";


interface Props {
  questionText?: string;
  onChange?:(e: any)=>void
  value?:string
  onSubmit:(e: any)=>void



}
  // how to display a new input field on next so it can be saved to local storage
export default function Question({ questionText, onChange, value, onSubmit }: Props) {
  return (
    <form className="question1-container" onSubmit={onSubmit}>
      <label>{questionText}:</label>
      {/* <input type="text" onChange ={onChange}></input> */}
      <input type="text" onChange ={onChange} value ={value}></input>
       <button type='submit'>submit</button>
    </form>
  );
}
