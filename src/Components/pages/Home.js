import React from 'react'
import './Home.css'

export default function Home(props) {
  console.log(props);
  return (
    <div className="home">
    <div className="Box">
      <div className="EventBox">
        <page className = "Header">Coming Events</page>
        <div className = "line"></div>
        <div className = "Button" onClick={() => props.setPage('Events')}>Learn More</div>
      </div>

      <div className="EventBox">
        <page className = "Header">Parks</page>
        <div className = "line"></div>
        <div className = "Button" onClick={() => props.setPage('Parks')}>Learn More</div>
      </div>
    </div>
    <div className="ServicesBox">
      <page className = "Header">Services</page>
      <div className = "line"></div>
      <div className = "Button" onClick={() => props.setPage('Services')}>Learn More</div>
    </div>
  </div>
  )
}
