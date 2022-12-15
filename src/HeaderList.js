import React from "react";
import HomeBG from "./background/homeBG.webp";
import ContactBG from "./background/contactBG.webp";
import EventsBG from "./background/eventsBG.webp";
import ServicesBG from "./background/servicesBG.jpg";
import ParksBG from "./background/parksBG.jpg";
import Feedback from "./pages/Feedback.js";

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
  Services: {
    name: "Services",
    img: <img className="Background-style" src={ServicesBG} alt="ServicesBG" />,
    title: <h1>Services</h1>,
  },
  Parks: {
    name: "Parks",
    img: <img className="Background-style" src={ParksBG} alt="ParksBG" />,
    title: <h1>Parks</h1>,
  },
};

export default HeaderList;
