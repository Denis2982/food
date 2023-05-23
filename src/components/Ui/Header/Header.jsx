import { NavLink, Link } from "react-router-dom";
import BoxIcon from "../../Icons/BoxIcon";
import LogoIcon from "../../Icons/LogoIcon";
import Input from "../Input/Input";
import ProfileImg from "/src/assets/profile.png";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            <LogoIcon />
          </Link>
          <div className="header__search">
            <Input />
          </div>
          <nav className="header__list">
            <NavLink to="/" className="header__list-link">
              Restaurants
            </NavLink>
            <NavLink to="/works" className="header__list-link">
              Deals
            </NavLink>
            <NavLink to="/contacts" className="header__list-link">
              My orders
            </NavLink>
          </nav>
          <div className="header__btn">
            <div className="header__busket">
              <BoxIcon />
              <div className="header__busket-counter">4</div>
            </div>
            <Link to="/profile" className="header__profile">
              <img src={ProfileImg} alt="Profile" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
