import { Button } from "@shared";
import {  useState } from "react";

interface Props {
  questionText: string;
  onChange:(e: any)=>void
  value:string


}
  // how to display a new input field on next
export default function Question({ questionText, onChange, value}: Props) {
  return (
    <form action="" className="question1-container">
      <label>{questionText}:</label>
      {/* <input type="text" onChange ={onChange}></input> */}
      <input type="text" value={value} onChange ={onChange}></input>
    
    </form>
  );
}
