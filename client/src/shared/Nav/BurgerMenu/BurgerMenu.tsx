import "./burgerMenu.css";
interface Props {
  onClick: () => void;
}

export default function BurgerMenu({ onClick }: Props) {
  return (
    <div
      className="burger-container"
      onClick={onClick} // this should be onclick prop
    >
      <div className="burger-menu"></div>
      <div className="burger-menu"></div>
      <div className="burger-menu"></div>
    </div>
  );
}
