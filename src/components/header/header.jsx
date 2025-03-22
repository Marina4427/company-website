import { NavLink } from "react-router-dom";
import Navbar from "../navbar/navbar";
import logo from '../../assets/images/svg/logo.svg';
import './style.css';
import Btn from "../btn/btn";

const Header = () => {
    return ( <header className="header" id="header">
        <div className="header__container container">
          <div className="content-left">
            <div className="header__logo">
              <img className="header__logo-image" src={logo} alt="Логотип проекта" />
              <NavLink to="/" className="header__title" >Tweakful</NavLink>
            </div>
            <Navbar />
          </div>
          <div className="content-right">
           <Btn text='Book a meeting' link="/help"/>
          </div>
        </div>
      </header> );
}
 
export default Header;