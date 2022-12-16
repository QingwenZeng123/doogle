import React from "react";

export default function Home(props) {
  console.log(props);
  return (
    <div className="Home-container">
      <div className="Box-container-Event-Parks">
        <div className="EventsBox">
          <div className="Box-header">Coming Events</div>
          <div className="line"></div>
          <button
            className="Learn-more"
            onClick={() => props.setPage("Events")}
          >
            Learn More
          </button>
        </div>

        <div className="ParksBox">
          <div className="Box-header">Parks</div>
          <div className="line"></div>
          <button className="Learn-more" onClick={() => props.setPage("Parks")}>
            Learn More
          </button>
        </div>
      </div>

      <div className="Box-container-Shops">
        <div className="ShopsBox">
          <div className="Box-header">Shops</div>
          <div className="line"></div>
          <button className="Learn-more" onClick={() => props.setPage("Shops")}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
