import React from "react";
import HomeBG from "./background/HomeBG.webp";
import contactBG from "./background/contactBG.webp";
import eventBG from "./background/eventsBG.webp";
import breederBG from "./background/breederBG.jpg";
import parksBG from "./background/parksBG.jpg";

const HeaderList = [
  {
    id: 0,
    name: "Home",
    img: <img src={HomeBG} alt="HomeBG" />,
  },
  {
    id: 1,
    name: "contact",
    img: <img src={contactBG} alt="contactBG" />,
  },
  {
    id: 2,
    name: "events",
    img: <img src={eventBG} alt="eventBG" />,
  },
  {
    id: 3,
    name: "breederBG",
    img: <img src={breederBG} alt="breederBG" />,
  },
  {
    id: 4,
    name: "parksBG",
    img: <img src={parksBG} alt="parksBG" />,
  },
];

export default HeaderList;
