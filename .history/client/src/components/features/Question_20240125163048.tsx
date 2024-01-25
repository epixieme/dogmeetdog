import { Button } from "@shared";
import { SetStateAction, useState } from "react";

interface Props {
  questionText: string;


}

export default function Question({ questionText}: Props) {
  return (
    <form action="" className="question1-container">
      <label>{questionText}:</label>
      <input type="text"></input>
    </form>
  );
}
