import React from "react";

export default function Home(props) {
  console.log(props);
  return (
    <div className="home__container flex">
      <div className="box__container-event-parks">
        <div className="box__container flex">
          <div className="box__header">Dog Friendly Events</div>
          <button
            className="learn__more"
            onClick={() => props.setPage("Events")}
          >
            Learn More
          </button>
        </div>

        <div className="box__container flex">
          <div className="box__header">Parks</div>
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
          <div className="box__header">Shops</div>
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
