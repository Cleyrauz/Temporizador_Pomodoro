import React from "react";
import PropTypes from "prop-types";
import logo from "../../images/logo.svg";

const Header = (props) => {
  const { title = "Welcome to React", url = "http://localhost:3000" } = props;
  return (
    <header className="App-header">
      <a href={url}>
        <img src={logo} className="App-Logo" alt="logo" />
      </a>
      <h1 className="App-Title">{title}</h1>
    </header>
  );
};

Header.protoTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Header;
