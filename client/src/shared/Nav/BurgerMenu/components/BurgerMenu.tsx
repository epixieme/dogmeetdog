import "../styles/burgerMenu.css";
interface Props {
  onClick: () => void;
}

export default function BurgerMenu({ onClick }: Props) {
  return (
    <div className="burger-container" onClick={onClick}>
      <div className="burger-menu"></div>
      <div className="burger-menu"></div>
      <div className="burger-menu"></div>
    </div>
  );
}
