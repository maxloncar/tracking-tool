import React from "react";
import edit from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

export default function HistoryTimer({
  id,
  description,
  date,
  hours,
  minutes,
  seconds,
}) {
  const { currentUser } = useAuth();

  const handleEdit = async (id, oldDescription) => {
    const description = prompt(
      "Enter a description for timer: ",
      oldDescription
    );
    const docRef = doc(db, `users/${currentUser.uid}/timers`, id);
    const payload = { description, date, hours, minutes, seconds };
    setDoc(docRef, payload);
  };

  return (
    <div className="history_timer">
      <div className="time">
        <p>{date}</p>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="time_tracked">
        <span>{hours > 9 ? hours : "0" + hours}:</span>
        <span>{minutes > 9 ? minutes : "0" + minutes}:</span>
        <span>{seconds > 9 ? seconds : "0" + seconds}</span>
      </div>
      <div className="action_buttons">
        <button className="edit">
          <img
            src={edit}
            alt="Edit icon"
            onClick={() => handleEdit(id, description)}
          />
        </button>
        <button className="delete">
          <img src={deleteIcon} alt="Delete icon" />
        </button>
      </div>
    </div>
  );
}
