import React from "react";
import { NavLink, Link } from "react-router-dom";

import { Container } from "reactstrap";
import "./header.css";

const NAV__LINKS = [
  {
    display: "home",
    url: "/home",
  },
  {
    display: "Market",
    url: "/market",
  },
  {
    display: "Create",
    url: "/create",
  },
  {
    display: "Contact",
    url: "/contact",
  },
  {
    display: "Contact",
    url: "/contact",
  },
];
const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex gap-2 align-items-center">
              <span>
                <i className="ri-fire-fill"></i>
              </span>
              NFTs
            </h2>
          </div>

          <div className="nav__menu">
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink to={item.url}> {item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
