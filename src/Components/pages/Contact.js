import React from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function createContact({ name, email, message, subject }) {
  const data = { name, email, message, subject, date: Timestamp.now() };
  const docRef = await addDoc(collection(db, "contactUs"), data);
  return { id: docRef.id, ...data };
}

export default function Contact() {
  return (
    <div className="contact-container">
      <form>
        <h2>We'd Love To Hear From You</h2>
        <p>
          Whether you are concerned about features, services or locations - We
          are ready to answer any questions!
        </p>
        <div className="input-container">
          <label id="name" for="userName">
            Name
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your name"
          />
        </div>
        <div className="input-container">
          <label id="email" for="userEmail">
            Email
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your email"
          />
        </div>
        <div className="input-container">
          <label id="subject" for="userSubject">
            Subject
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your subject"
          />
        </div>
        <div className="input-container">
          <label id="mesage" for="userMessage">
            Message
          </label>
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
