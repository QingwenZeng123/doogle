import React from "react";

export default function Shops() {
  return (
    <div className="store-list">
      <div className="store-header">
        <h1>Popular dog shops in US</h1>
      </div>
      <div className="stores-container">
        <div className="Petco">
          <p className="shop-link">https://www.petco.com/shop/en/petcostore</p>
        </div>
        <div className="PetSmart">
          <p className="shop-link">https://www.petsmart.com/</p>
        </div>
        <div className="Chewy">
          <p className="shop-link">http://www.chewy.com/</p>
        </div>
      </div>
    </div>
  );
}
