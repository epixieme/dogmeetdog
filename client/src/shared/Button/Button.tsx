
import { Link } from "react-router-dom";


interface buttonProps {
  btnText:string,
  route?:any, 
  onClick?: () => void,
}


export default function Button({ btnText, route, onClick }: buttonProps){
  return (
    <Link to={route} onClick={onClick} className="btnLink">
      <button> {btnText}</button>
    </Link>
  );
}
