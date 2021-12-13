import React from "react";
import timer from "../assets/start_new_timer.svg";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

export default function StartNewTimerButton() {
  const { currentUser } = useAuth();

  const handleNew = async () => {
    const description = prompt("Enter a description for timer: ");
    const collectionRef = collection(db, `users/${currentUser.uid}/timers`);
    const date = new Date();
    const payload = {
      description: description,
      date: date,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    await addDoc(collectionRef, payload);
  };

  return (
    <button className="start_new_timer" onClick={handleNew}>
      <img src={timer} alt="Stopwatch" />
      <p>Start new timer</p>
    </button>
  );
}
