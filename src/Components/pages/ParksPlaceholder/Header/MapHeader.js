import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";

export default function MapHeader({ setCoordinate }) {
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinate({ lat, lng });
  };

  return (
    <div className="map__header">
      <div className="map__header-container">
        <h2>Attractions Parks</h2>
        <div className="search__bar-container">
          <h3 className="search__bar-title">Explore New Places</h3>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="search__bar-search">
              <input
                type="text"
                placeholder="Search..."
                className="search_bar-input"
              />
            </div>
          </Autocomplete>
        </div>
      </div>
    </div>
  );
}
