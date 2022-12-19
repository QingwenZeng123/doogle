import React from "react";

export default function Events(props) {
  console.log(props);

  return (
    <div className="Box-container">
      <div className="Box-container-row">
        <div className="EventsBox-Events-page">
          <h1 className="Events-text">Cool Tricks w/ Susan Light</h1>
          <h1 className="Events-text">Los Angeles</h1>
          <h1 className="Events-text">Every Friday | 2:00 PM – 3:30 PM</h1>
        </div>
        <div className="EventsBox-Events-page">
          <h1 className="Events-text">
            Free Consultation with Sylvia Wes & Rhonda Feinberg
          </h1>
          <h1 className="Events-text">Santa Monica</h1>
          <h1 className="Events-text">
            All Month | Select times | Reservation required
          </h1>
        </div>
      </div>
      <div className="Box-container-row">
        <div className="EventsBox-Events-page">
          <h1 className="Events-text">SNPLA Pet Vaccine Clinic</h1>
          <h1 className="Events-text">Los Angeles</h1>
          <h1 className="Events-text">Every Day | 4:30 PM – 7:30 PM</h1>
        </div>
        <div className="EventsBox-Events-page">
          <h1 className="Events-text">VIP Petcare at Pet Food Express </h1>
          <h1 className="Events-text">Beverly Hills</h1>
          <h1 className="Events-text">Every Tuesday | 5:00 PM – 7:00 PM</h1>
        </div>
      </div>
      <div className="Box-container-row">
        <div className="EventsBox-Events-page">
          <h1 className="Events-text">Online Pet Programming for Kids</h1>
          <h1 className="Events-text">Virtual</h1>
          <h1 className="Events-text">
            Every Thursday of Month | 4:00 PM – 4:30 PM
          </h1>
        </div>
        <div className="EventsBox-Events-page">
          <h1 className="Events-text">Wags & Walks Volunteer Orientation</h1>
          <h1 className="Events-text">Los Angeles</h1>
          <h1 className="Events-text">Every Friday | 6:00 PM- 7:00 PM</h1>
        </div>
      </div>
    </div>
  );
}
