import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    console.log("index > Try");
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
        "X-RapidAPI-Key": "c49728e5c0msh0f14fc48be87329p1f5388jsn60baa23a9bd6",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    console.log("Index.js > getPlacesData > data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
