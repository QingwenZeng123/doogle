import React from "react";

import HomeBG from "../images/homeBG.jpg";
import ContactBG from "../images/contactBG.webp";
import EventsBG from "../images/eventsBG.webp";
import ShopsBG from "../images/shopsBG.jpg";
import ParksBG from "../images/parksBG.jpg";

const HeaderList = {
  Home: {
    name: "Home",
    img: <img className="Background-style" src={HomeBG} alt="HomeBG" />,
    title: <h1>Home</h1>,
  },
  Contact: {
    name: "Contact",
    img: <img className="Background-style" src={ContactBG} alt="ContactBG" />,
    title: <h1>Contact</h1>,
  },
  Events: {
    name: "Events",
    img: <img className="Background-style" src={EventsBG} alt="EventsBG" />,
    title: <h1>Events</h1>,
  },
  Shops: {
    name: "Shops",
    img: <img className="Background-style" src={ShopsBG} alt="ShopsBG" />,
    title: <h1>Shops</h1>,
  },
  Parks: {
    name: "Parks",
    img: <img className="Background-style" src={ParksBG} alt="ParksBG" />,
    title: <h1>Parks</h1>,
  },
};

export default HeaderList;
