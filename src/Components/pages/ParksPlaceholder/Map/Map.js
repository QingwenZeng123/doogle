import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import useStyles from "./styles";

export default function Map({
  setCoordinate,
  setBounds,
  coordinate,
  places,
  setChildClick,
}) {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCn60PwOjrPgnFMG46T0my1tO6aVXPBvhg",
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinate}
        center={coordinate}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        //   options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        option={""}
        onChange={(e) => {
          console.log("MAP > e", e);
          setCoordinate({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClick(child)}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" font-size="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {" "}
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                />
                <Rating
                  name="read-only"
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}
