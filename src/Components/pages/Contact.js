import React from "react";
import { useState } from "react";
import { createContact } from "../../services/contactService";
import { useAuthentication } from "../../services/authService";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const user = useAuthentication();

  function submit(e) {
    setError(null);
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError("***All information must be provided***");
    } else if (!user) {
      setError("Sign in to submit contact form");
    } else {
      createContact({ name, email, subject, message });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }

  return (
    <div className="contact-container">
      <form onSubmit={submit}>
        <h2>We'd Love To Hear From You</h2>
        <p>
          Whether you are concerned about features, services or locations - We
          are ready to answer any questions!
        </p>
        <div className="input-container">
          <label>Name</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Email</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Subject</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Message</label>
          <textarea
            type="text"
            className="input-field textarea-field"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <br />
        {error && <p className="error">{error}</p>}
        <button type="submit" className="submit">
          Send
        </button>
      </form>
    </div>
  );
}
