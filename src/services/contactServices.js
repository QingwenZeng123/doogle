import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function createContact({ name, email, message, subject }) {
  const data = { name, email, message, subject, date: Timestamp.now() };
  const docRef = await addDoc(collection(db, "contact"), data);
  return { id: docRef.id, ...data };
}

export default function ConatctEntry({ addContact }) {
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
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        Sushi Name
        <input value={name} onChange={(e) => setName(e.target.value)} />
        Sushi Recipe
        <textarea
          rows="8"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
