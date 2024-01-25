
interface Props {
  questionText: string;
  answer:string

}

export default function Question({ questionText, answer }: Props) {
  return (
    <form action="" className="question1-container">
      <label>{questionText}:</label>
      <input type="text" value={answer}></input>
    </form>
  );
}
