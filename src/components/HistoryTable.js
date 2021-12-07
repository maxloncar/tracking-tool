import React from "react";
import HistoryTimer from "./HistoryTimer";
import { db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function HistoryTable() {
  const { currentUser } = useAuth();
  const [timers, setTimers] = useState([]);

  useEffect(() =>
    onSnapshot(
      collection(db, `users/${currentUser.uid}/timers`),
      (snapshot) => {
        setTimers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      },
      []
    )
  );

  return (
    <div className="history_table">
      <ul>
        <li>Date</li>
        <li>Description</li>
        <li>Time tracked</li>
        <li>Actions</li>
      </ul>
      {timers.map((timer) => (
        <HistoryTimer
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
