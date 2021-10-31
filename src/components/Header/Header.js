import React, { useState } from "react";
import "./Header.css";
import Sidebar from "react-sidebar";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  const [toggle, changeToggle] = useState(false);

  const toggleFunction = () => {
    changeToggle((toggle) => !toggle);
  };

  return (
    <div className="header">
      {/* <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton> */}
      <br />
      {/* Sidebar */}
      <h2 id="tyke-heading">Tyke</h2>
      <img
        className="header__logo"
        // src="https://logodix.com/logo/15262.png"
        src="https://cdn2.iconfinder.com/data/icons/e-commerce-icons-2/256/Ecommerce_Icons_Rose_Color-11-512.png"
        height="200px"
        width="100px"
        alt="Tyke"
      />
    </div>
  );
}

export default Header;
