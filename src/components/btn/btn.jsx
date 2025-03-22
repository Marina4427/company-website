import clsx from "clsx";
import arrow from "../../assets/images/svg/arrow.svg";
import "./style.css";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Импортируем HashLink

const Btn = ({ text, bgColor, className, link, useHashLink }) => {
  // Выбираем компонент в зависимости от значения useHashLink
  const LinkComponent = useHashLink ? HashLink : NavLink;

  return (
    <LinkComponent
      to={link}
      className={clsx("button", bgColor, className)}
      role="button"
    >
      {text}
      <svg
        className="img__arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 10"
      >
        <use href={`${arrow}#arrow-icon`}></use>
      </svg>
    </LinkComponent>
  );
};

export default Btn;