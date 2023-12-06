import React from "react";
import { Link } from "react-router-dom";

interface buttonProps {
  btnText:string,
  route?:string, 
  onClick?: () => void,
  //can also add optional properties using a ? eg route?:
}


export default function Button({ btnText, route, onClick }: buttonProps){


  return (
    <Link to={route} onClick={onClick} className="btnLink">
      <button> {btnText}</button>
    </Link>
  );
}
