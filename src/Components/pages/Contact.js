import React from "react";
import { useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function createContact({ name, email, message, subject }) {
  const data = { name, email, message, subject, date: Timestamp.now() };
  const docRef = await addDoc(collection(db, "contactUs"), data);
  return { id: docRef.id, ...data };
}

export default function ContactEntry({ addContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState(null);

  function submit(e) {
    setError(null);
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || !subject.trim()) {
      setError("All information must be included");
    } else {
      addContact({ name, email, message, subject });
      addDoc(collection(db, "contactUs"), name, email, message, subject);
    }
  }

  // export default function Contact() {
  return (
    <div className="contact-container">
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
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
            onChange={(e) => setEmail(e.target.email)}
          />
        </div>
        <div className="input-container">
          <label>Subject</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your subject"
            value={subject}
            onChange={(e) => setSubject(e.target.subject)}
          />
        </div>
        <div className="input-container">
          <label>Message</label>
          <textarea
            type="text"
            className="input-field textarea-field"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.message)}
          />
        </div>
        <button type="button" className="submit">
          Send
        </button>
      </form>
    </div>
  );
}
