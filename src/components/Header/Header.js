import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      Tyke
      <img
        className="header__logo"
        src="https://logodix.com/logo/15262.png"
        alt="Tyke"
      />
    </div>
  );
}

export default Header;
