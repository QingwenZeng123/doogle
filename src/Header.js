import React from "react";
import HeaderList from "./HeaderList";

function Header(props) {
  const headname = props.headname;
  console.log(headname);
  // const headers = HeaderList.map((headerList) => (
  //   <HeaderList key={headerList.name} headerList={headerList} />
  // ));

  return <div>{HeaderList[headname].img}</div>;

  /* if (headname === "Home") {
    return HeaderList.slice(0, 1).map((headerList) => (
      <div key={headerList.id}>{headerList.img}</div>
    ));
  } else if (headname === "contact") {
    return HeaderList.slice(1, 2).map((headerList) => (
      <div key={headerList.id}>{headerList.img}</div>
    ));
  } else if (headname === "events") {
    return HeaderList.slice(2, 3).map((headerList) => (
      <div key={headerList.id}>{headerList.img}</div>
    ));
  } else if (headname === "breeders") {
    return HeaderList.slice(3, 4).map((headerList) => (
      <div key={headerList.id}>{headerList.img}</div>
    ));
  } else if (headname === "parks") {
    return HeaderList.slice(4, 5).map((headerList) => (
      <div key={headerList.id}>{headerList.img}</div>
    ));
  } else {
    return HeaderList.slice(0, 1).map((headerList) => (
      <div key={headerList.id}>{headerList.img}</div>
    ));
  } */
}

export default Header;
