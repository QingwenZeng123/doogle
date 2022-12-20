import React from "react";
import Chewy from "../../images/chewy.jpg";
import Petco from "../../images/petco.jpg";
import Petsmart from "../../images/petsmart.jpg";

export default function Shops() {
  return (
    <div className="store-list flex">
      <div className="store-header">
        <h1>Popular dog shops in US</h1>
      </div>
      <div className="stores-container">
        <div className="store">
          <img src={Petco} alt="Petco" />
          <a
            href="https://www.petco.com/shop/en/petcostore"
            className="store-link"
          >
            Visit Petco Website
          </a>
        </div>
        <div className="store">
          <img src={Petsmart} alt="Petsmart" />
          <a href="https://www.petsmart.com/" className="store-link">
            {" "}
            Visit PetSmart Website{" "}
          </a>
        </div>
        <div className="store">
          <img src={Chewy} alt="Chewy" />
          <a href="http://www.chewy.com/" className="store-link">
            {" "}
            Visit Chewy Website{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
