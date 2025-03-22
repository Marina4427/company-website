import { HashLink } from "react-router-hash-link";
import Btn from "../btn/btn";

import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__up">
          <div className="footer__up-left">
            <HashLink to="/#header" className="header__title">Tweakful </HashLink>
            <p className="about">About Tweakful</p>
            <p className="text">
              Tweakful is HubSpot Theme Based On Engagement Design Framework,
              designed & developed by Openthrive.
            </p>
            <Btn text="Contact Us" className="btn__footer" link="/help#header" useHashLink="true"  />
          </div>


          <div className="footer__up-right">
            <ul className="link__list">
              <li className="link__list-item">Contact </li>
              <li className="link__list-item">Career</li>
              <li className="link__list-item">Privacy Plocy</li>
              <li className="link__list-item">Terms Of Services</li>
              <li className="link__list-item">GDPR</li>
              <li className="link__list-item">FAQs</li>
            </ul>
            <ul className="link__list">
              <li className="link__list-item">Blog</li>
              <li className="link__list-item">Capabilities</li>
              <li className="link__list-item">Resources</li>
              <li className="link__list-item">Partnership Integration</li>
            </ul>
          </div>
        </div>
        <div className="footer__down">
          <div className="footer__down-right">
            B2B website and engagement design solution that transform marketing
            and sales performance like never before.
          </div>
          <div className="footer__down-left"> © 2015-2020 Openthrive. All right reserved. </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
