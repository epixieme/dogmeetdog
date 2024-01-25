import { Button } from "@shared";
import { SetStateAction, useState } from "react";

interface Props {
  questionText: string;
  value:string

}

export default function Question({ questionText, value}: Props) {


  return (
    <form action="" className="question1-container">
      <label>{questionText}:</label>
      <input type="text" value ={value}></input>
    </form>
  );
}
