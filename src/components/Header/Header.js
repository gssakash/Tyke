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
      <Sidebar
        sidebar={
          <div id="sidebar-details">
            <br />
            <h3 className="sidebar-header">No. Of Coins Collected</h3>
            {/* <h5>You have {coinsCollected} 💰</h5> */}
          </div>
        }
        open={toggle}
        onSetOpen={toggleFunction}
        styles={{ sidebar: { background: "white" } }}
      >
        <button className="sidebar-btn" onClick={() => toggleFunction(true)}>
          Open sidebar
        </button>
      </Sidebar>
      <h2 id="tyke-heading">Tyke</h2>
      <img
        className="header__logo"
        src="https://logodix.com/logo/15262.png"
        alt="Tyke"
      />
    </div>
  );
}

export default Header;
