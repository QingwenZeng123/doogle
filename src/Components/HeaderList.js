import React from "react";
// import HomeBG from "../background/HomeBG";
import HomeBG from "../background/HomeBG.webp";
import ContactBG from "../background/ContactBG.webp";
import EventsBG from "../background/EventsBG.webp";
import ShopsBG from "../background/ShopsBG.jpg";
import ParksBG from "../background/ParksBG.jpg";
// import Feedback from "../pages/Feedback.js";

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
