import React from "react";
import Chewy from "../../background/chewy.jpg";
import Petco from "../../background/petco.jpg";
import Petsmart from "../../background/petsmart.jpg";

export default function Shops() {
  return (
    <div className="store-list flex">
      <div className="store-header">
        <h1>Popular dog shops in US</h1>
      </div>
      <div className="stores-container">
        <div className="store">
          <img src={Petco} />
          <a
            href="https://www.petco.com/shop/en/petcostore"
            className="store-link"
          >
            Visit Petco Website
          </a>
        </div>
        <div className="store">
          <img src={Petsmart} />
          <a href="https://www.petsmart.com/" className="store-link">
            {" "}
            Visit PetSmart Website{" "}
          </a>
        </div>
        <div className="store">
          <img src={Chewy} />
          <a href="http://www.chewy.com/" className="store-link">
            {" "}
            Visit Chewy Website{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
