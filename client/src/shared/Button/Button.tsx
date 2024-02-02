import { Link } from "react-router-dom";

interface buttonProps {
  btnText: string;
  route?: any;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export default function Button({ btnText, route, onClick, type }: buttonProps) {
  return (
    <Link to={route} onClick={onClick} className="btnLink">
      <button type={type}> {btnText}</button>
    </Link>
  );
}
