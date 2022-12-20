import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function createContact({ name, email, subject, message }) {
  const data = { name, email, subject, message, date: Timestamp.now() };
  const docRef = await addDoc(collection(db, "contactUs"), data);
  return { id: docRef.id, ...data };
}
