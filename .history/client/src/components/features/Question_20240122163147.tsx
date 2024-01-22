

interface Props {
  questionText: string;

}

export default function Question({ questionText }: Props) {
  return (
    <form action="" className="question1-container">
      <label>{questionText}:</label>
      <input type="text"></input>
      {/* <Button route="/question2" btnText={""} /> */}
      Button  
    </form>
  );
}
