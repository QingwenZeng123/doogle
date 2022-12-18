import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles.js";

export default function List({
  places,
  childClick,
  isLoading,
  rating,
  setRating,
}) {
  const classes = useStyles();
  const [elementRefs, setElementRefs] = useState([]);

  // Give reference to each location, so when you click on the card from the map, then it will know which park it refers to
  useEffect(() => {
    setElementRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
    console.log("LIST > places", places);
  }, [places]);

  return (
    <div className="lists__holder">
      <h2>Attractions Parks For Your Pets</h2>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <div className="list__container">
            {!places ? (
              <p>
                There is no attraction park at this location or the Travel
                Advisor API broke `I'm really sad`. Places might not appear, but
                I believe Autocomplete works - Maika
              </p>
            ) : (
              places?.map((place, i) => (
                <div>
                  <PlaceDetails
                    selected={Number(childClick) === i}
                    refProp={elementRefs[i]}
                    place={place}
                  />
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}
