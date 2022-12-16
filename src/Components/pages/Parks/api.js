import axios from "axios";

// // const axios = require("axios");
// const router = require("express").Router();

// module.exports = router;

// const key = REACT_APP_GOOGLE_MAPS_API_KEY;
// export const getPlacesData = router.get("/park", async (req, res, next) => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(
//       `https://maps.googleapis.com/maps/api/place/textsearch/json?type=park&key=${key}`
//     );
//     console.log("api > data", data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// });

const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?type=park&key=${key}`;

export const getPlacesData = async () => {
  try {
    console.log("Index > Try");
    const {
      data: { data },
    } = await axios.get(URL);
    console.log("api.js > getPlacesData > data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
