import React from "react";
import GoogleMapReact from "google-map-react";

const coordinate = { lat: 0, lng: 0 };
export default function Map() {
  console.log("map");
  return (
    <div className="map-display">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinate}
        center={coordinate}
        defaultZoom={14}
        //   options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        option={""}
        // onChange={""}
      ></GoogleMapReact>
    </div>
  );
}
