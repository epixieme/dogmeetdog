import { Link } from "react-router-dom";
import "../styles/button.css";
interface buttonProps {
  btnText: string;
  route?: any;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  disabled: any;
}

export default function Button({ btnText, route, onClick, type, disabled }: buttonProps) {
  return (
    <Link to={route} onClick={onClick} className="btnLink">
      <button type={type} disabled={disabled} name="button">
        {btnText}
      </button>
    </Link>
  );
}
