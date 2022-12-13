import React from 'react'

export default function Home(props) {
  console.log(props);
  return (
    <div className="home">
    <div className="Box">
      <div className="EventBox">
        <page>Coming Events</page>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div onClick={() => props.setPage('Events')}>Learn More</div>
      </div>

      <div className="EventBox">
        <page>Parks</page>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div onClick={() => props.setPage('Parks')}>Learn More</div>
      </div>
    </div>
    <div className="ServicesBox">
      <page>Services</page>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div onClick={() => props.setPage('Services')}>Learn More</div>
    </div>
  </div>

    
  )
}
