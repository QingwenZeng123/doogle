import React from "react";

export default function Contact() {
  return (
    <div className="contact-container">
      <form>
        <h2>We'd Love To Hear From You</h2>
        <p>
          Whether you're concern about features, services, location - We're
          ready to answer any question
        </p>
        <div className="input-container">
          <label>Name</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your name"
          />
        </div>
        <div className="input-container">
          <label>Email</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your email"
          />
        </div>
        <div className="input-container">
          <label>Subject</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your subject"
          />
        </div>
        <div className="input-container">
          <label>Message</label>
          <textarea
            type="text"
            className="input-field textarea-field"
            placeholder="Enter your message"
          />
        </div>
        <button type="button" className="submit">
          Send
        </button>
      </form>
    </div>
  );
}
