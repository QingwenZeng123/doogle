import React from "react";

export default function Events(props) {
  console.log(props);

  return (
    <div className="Box-container">
      <div className="Box-container-row">
        <div className="EventsBox-Events-page">
          <h1>Christams</h1>
          <h1>Date</h1>
        </div>
        <div className="EventsBox-Events-page">
          <h1>Happy New Year</h1>
          <h1>Date</h1>
        </div>
      </div>
      <div className="Box-container-row">
        <div className="EventsBox-Events-page">
          <h1>Cute Puppies</h1>
          <h1>Date</h1>
        </div>
        <div className="EventsBox-Events-page">
          <h1>Playground</h1>
          <h1>Date</h1>
        </div>
      </div>
      <div className="Box-container-row">
        <div className="EventsBox-Events-page">
          <h1>Costume Ball</h1>
          <h1>Date</h1>
        </div>
        <div className="EventsBox-Events-page">
          <h1>Free Lunch</h1>
          <h1>Date</h1>
        </div>
      </div>
    </div>
  );
}
