import React, { useState, useEffect } from "react";
import MapHeader from "./Header/MapHeader";
import List from "./List/List";
import Map from "./Map/Map";
import { getPlacesData } from "../../../api/index";

export default function Parks() {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilterPlaces] = useState([]);
  const [childClick, setChildClick] = useState(null);

  const [coordinate, setCoordinate] = useState({});
  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [rating, setRating] = useState("");

  //Get user location at start
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        !latitude
          ? setCoordinate({ lat: 0, lng: 0 })
          : setCoordinate({ lat: latitude, lng: longitude });
      }
    );
    console.log("PARKS > geolocation > coordinates", { coordinate });
  }, []);

  // Filter the parks based on the rating
  useEffect(() => {
    const filteredPlaces = places?.filter((place) => place.rating > rating);
    setFilterPlaces(filteredPlaces);
  }, [rating]);

  // Get places from Travel Advisor API but filter if the parks has no name, or it's not a park, or no reviews
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        setPlaces(
          data?.filter(
            (place) =>
              place.fullname &&
              place.num_reviews > 0 &&
              place.fullname.toLowerCase().includes("park") &&
              !place.fullname.toLowerCase().includes("parking")
          )
        );
        console.log("PARKS > bounds", { bounds });
        console.log("PARKS > places", places);
        setFilterPlaces([]);
        setIsLoading(false);
      });
    }
  }, [bounds]);

  return (
    <div className="park__container">
      <MapHeader setCoordinate={setCoordinate} />
      <List
        places={filteredPlaces?.length ? filteredPlaces : places}
        childClick={childClick}
        isLoading={isLoading}
        rating={rating}
        setRating={setRating}
      />
      <Map
        setCoordinate={setCoordinate}
        setBounds={setBounds}
        coordinate={coordinate}
        places={filteredPlaces.length ? filteredPlaces : places}
        setChildClick={setChildClick}
      />
    </div>
  );
}
