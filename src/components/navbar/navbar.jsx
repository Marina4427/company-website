import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav__list">
        <li className="nav__item nav__item_active">
          <NavLink to="/" className="nav__link link">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <a className="nav__link link" href="#!">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link link" href="#!">
            Pricing
          </a>
        </li>
        <li className="nav__item">
          <NavLink to="/about" className="nav__link link">
            About Us
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/help" className="nav__link link">
            Help
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
