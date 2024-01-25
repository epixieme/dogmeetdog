import { Button } from "@shared";
import { SetStateAction, useState } from "react";

interface Props {
  questionText: string;
  onChange:(e: any)=>void
}

export default function Question({ questionText, onChange }: Props) {


  return (
    <form action="" className="question1-container">
      <label>{questionText}:</label>
      <input type="text" onChange={onChange}></input>
    </form>
  );
}
