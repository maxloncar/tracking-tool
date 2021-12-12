import React from "react";
import Timer from "./Timer";
import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

export default function TimerTable() {
  const { currentUser } = useAuth();
  const [timers, setTimers] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        collection(db, `users/${currentUser.uid}/timers`),
        (snapshot) =>
          setTimers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    [currentUser.uid]
  );

  return (
    <div className="timer_table">
      <ul>
        <li>Time logged</li>
        <li>Description</li>
        <li>Actions</li>
      </ul>
      {timers.map((timer) => (
        <Timer
          key={timer.id}
          id={timer.id}
          description={timer.description}
          date={timer.date}
          hours={timer.hours}
          minutes={timer.minutes}
          seconds={timer.seconds}
        />
      ))}
    </div>
  );
}
