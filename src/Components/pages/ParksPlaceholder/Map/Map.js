import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import { Googlemap, useLoadScript, Marker } from "@react-google-maps/api";
import useStyles from "./styles";
// import { GoogleMap } from "@react-google-maps/api";

export default function Map() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  const coordinate = { lat: 0, lng: 0 };
  const [isLoaded] = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  });
  //   const coordinate = new google.maps.LatLng(0, 0);
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCSe_peL8NgLLwUQFU4mxbJEcbA6yNatkc" }}
        defaultCenter={{ lat: 0, lng: 0 }}
        center={{ lat: 0, lng: 0 }}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      >
        {" "}
      </GoogleMapReact>
    </div>
  );
}
