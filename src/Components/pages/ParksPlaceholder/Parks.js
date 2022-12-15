import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import HeaderMap from "./Header/MapHeader";
import List from "./List/List";
import Map from "./Map/Map";
import PlaceHolder from "./PlaceDetails/PlaceDetails";
export default function Parks() {
  return (
    <>
      <CssBaseline />
      <HeaderMap />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
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
          <Map />
        </Grid>
      </Grid>
    </>
  );
}
