import React from "react";

export default function Events(props) {
  console.log(props);

  return (
    <div className="events__container flex">
      <div className="events__container-row">
        <div className="event__information flex">
          <h1 className="events__text">Cool Tricks w/ Susan Light</h1>
          <h1 className="events__text">Los Angeles</h1>
          <h1 className="events__text">Every Friday | 2:00 PM – 3:30 PM</h1>
        </div>
        <div className="event__information flex">
          <h1 className="events__text">
            Free Consultation with Sylvia Wes & Rhonda Feinberg
          </h1>
          <h1 className="events__text">Santa Monica</h1>
          <h1 className="events__text">
            All Month | Select times | Reservation required
          </h1>
        </div>
      </div>
      <div className="events__container-row">
        <div className="event__information flex">
          <h1 className="events__text">SNPLA Pet Vaccine Clinic</h1>
          <h1 className="events__text">Los Angeles</h1>
          <h1 className="events__text">Every Day | 4:30 PM – 7:30 PM</h1>
        </div>
        <div className="event__information flex">
          <h1 className="events__text">VIP Petcare at Pet Food Express </h1>
          <h1 className="events__text">Beverly Hills</h1>
          <h1 className="events__text">Every Tuesday | 5:00 PM – 7:00 PM</h1>
        </div>
      </div>
      <div className="events__container-row">
        <div className="event__information flex">
          <h1 className="events__text">Online Pet Programming for Kids</h1>
          <h1 className="events__text">Virtual</h1>
          <h1 className="events__text">
            Every Thursday of Month | 4:00 PM – 4:30 PM
          </h1>
        </div>
        <div className="event__information flex">
          <h1 className="events__text">Wags & Walks Volunteer Orientation</h1>
          <h1 className="events__text">Los Angeles</h1>
          <h1 className="events__text">Every Friday | 6:00 PM- 7:00 PM</h1>
        </div>
      </div>
    </div>
  );
}
