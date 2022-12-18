import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    console.log("INDEX > sw, ne", { sw, ne });
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    console.log("Index.js > getPlacesData > data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
