import React from "react";
import dogevents from "../../background/dogevents.jpeg";
import dogparks from "../../background/dogparks.jpg";
import dogshops from "../../background/dogshops.jpg";

export default function Home(props) {
  console.log(props);
  return (
    <div className="home__container flex">
      <div className="box__container-event-parks">
        <div className="box__container flex">
          <h4 className="box-header">Dog Friendly Events</h4>
          <img className="home-box-images" src={dogevents} />
          <button
            className="learn__more"
            onClick={() => props.setPage("Events")}
          >
            Learn More
          </button>
        </div>

        <div className="box__container flex">
          <h4 className="box-header">Parks</h4>
          <img className="home-box-images" src={dogparks} />
          <button
            className="learn__more"
            onClick={() => props.setPage("Parks")}
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="box__container-shops ">
        <div className="box__container flex">
          <h4 className="box-header">Shops</h4>
          <img className="home-box-images" src={dogshops} />
          <button
            className="learn__more"
            onClick={() => props.setPage("Shops")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
