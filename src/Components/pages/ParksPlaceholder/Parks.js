import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import HeaderMap from "./Header/MapHeader";
import List from "./List/List";
import Map from "./Map/Map";

import { getPlacesData } from "../../../api/index";

export default function Parks() {
  const [places, setPlaces] = useState([]);
  const [childClick, setChildClick] = useState(null);

  const [coordinate, setCoordinate] = useState({});
  const [bounds, setBounds] = useState({});

  //Get user location at start
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinate({ lat: latitude, lng: longitude });
      }
    );
    console.log("PARKS > geolocation > coordinates", coordinate);
  }, []);

  useEffect(() => {
    console.log("PARKS > Coordinate, bounds", coordinate, bounds);
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      console.log("PARKS > data", data);
      setPlaces(data);
    });
  }, [coordinate, bounds]);

  return (
    <>
      <CssBaseline />
      <HeaderMap />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} childClick={childClick} />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map
            setCoordinate={setCoordinate}
            setBounds={setBounds}
            coordinate={coordinate}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  );
}
