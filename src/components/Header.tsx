import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import "../assets/styles/header.css";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const getMemuHandle = () => {
    const getBody = document.getElementsByTagName("body");
    setMobileMenu(!mobileMenu);

    !mobileMenu ? (getBody[0].style.overflowY = "hidden") : null;
    !mobileMenu ? getBody[0].classList.add("overlay") : getBody[0].classList.remove("overlay");
  };

  document.addEventListener("click", (e: any) => {
    e.target.classList.contains("overlay") ? getMemuHandle() : null;
  });

  return (
    <>
      <div className="header-wrapper">
        <div className="logo">
          <img src={Logo} alt="site logo" />
        </div>

        <div onClick={getMemuHandle} className={`toggle-${mobileMenu ? "close" : "ham"}`}></div>

        <nav className={`nav-mobile-${mobileMenu ? "on" : "off"}`}>
          <ul>
            <li>
              <a href="#">PRODUCT</a>
            </li>
            <li>
              <a href="#">FEATURES</a>
            </li>
            <li>
              <a href="#">PRICING</a>
            </li>
            <li className="blank"></li>
            <li className="login">
              <a href="#">LOGIN</a>
            </li>
          </ul>
        </nav>

        <nav className="nav-desktop">
          <ul>
            <li>
              <a href="#">PRODUCT</a>
            </li>
            <li>
              <a href="#">FEATURES</a>
            </li>
            <li>
              <a href="#">PRICING</a>
            </li>
            <li className="blank"></li>
            <li className="login">
              <a href="#">LOGIN</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
