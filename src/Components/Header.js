import React from "react";
import HeaderList from "./HeaderList";

function Header(props, { setSubpage }) {
  const headname = props.headname;
  console.log(headname);

  return <div className="header-container">{HeaderList[headname].img}</div>;
}

export default Header;
