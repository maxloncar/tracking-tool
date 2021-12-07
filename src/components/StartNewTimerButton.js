import React from "react";
import timer from "../assets/start_new_timer.svg";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

export default function StartNewTimerButton() {
  const { currentUser } = useAuth();

  function getCurrentDate(separator = ".") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${year}`;
  }

  const handleNew = async () => {
    const description = prompt("Enter a description for timer: ");
    const collectionRef = collection(db, `users/${currentUser.uid}/timers`);
    const date = getCurrentDate();
    const payload = { description: description, date: date, hours: 0, minutes: 0, seconds: 0 };
    await addDoc(collectionRef, payload);
  };

  return (
    <button className="start_new_timer" onClick={handleNew}>
      <img src={timer} alt="Stopwatch" />
      <p>Start new timer</p>
    </button>
  );
}
