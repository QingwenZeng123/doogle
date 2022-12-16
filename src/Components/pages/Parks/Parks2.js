import React, { useEffect, useState } from "react";
import { GoogleMapReact } from "@react-google-maps/api";
import "../Parks/Park.css";
import List from "./List";
import Map from "./Map";

import { getPlacesData } from "./api";

export default function Parks() {
  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <div className="park-container">
      <div className="park-header">
        <h2>Park Finder</h2>
        <div className="searchbar-container">
          <h4>Search Your Location</h4>
          <input type="text" placeholder="location"></input>
        </div>
      </div>

      <div className="park-information-container">
        <div className="parks-list">
          <List />
        </div>
        <div className="map-container">
          <Map />
        </div>
      </div>
    </div>
  );
}
