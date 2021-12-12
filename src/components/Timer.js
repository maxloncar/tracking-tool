import React, { useState, useEffect } from "react";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import stop from "../assets/stop.svg";
import deleteIcon from "../assets/delete.svg";
import edit from "../assets/edit.svg";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

export default function Timer({
  id,
  description,
  date,
  hours,
  minutes,
  seconds,
}) {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
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

  const saveTime = async (id) => {
    const seconds = Math.floor(time);
    const minutes = Math.floor(time / 60);
    const hours = Math.floor(time / 3600);
    console.log(seconds);
    const docRef = doc(db, `users/${currentUser.uid}/timers`, id);
    const payload = {
      description: description,
      date: date,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
    setDoc(docRef, payload);
  };

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime += 1));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

  return (
    <div className="timer">
      {timerOn && (
        <div className="time">
          <span>{"0" + Math.floor((time / 3600) % 60)}:</span>
          <span>{"0" + Math.floor((time / 60) % 60)}:</span>
          <span>{"0" + Math.floor(time % 60)}</span>
        </div>
      )}
      {!timerOn && (
        <div className="time">
          <span>{hours === 0 ? "00" : hours > 9 ? hours : "0" + hours}:</span>
          <span>
            {minutes === 0 ? "00" : minutes > 9 ? minutes : "0" + minutes}:
          </span>
          <span>
            {seconds === 0 ? "00" : seconds > 9 ? seconds : "0" + seconds}
          </span>
        </div>
      )}
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="action_buttons">
        {!timerOn && (
          <button className="play">
            <img src={play} alt="Play icon" onClick={() => setTimerOn(true)} />
          </button>
        )}
        {timerOn && (
          <button className="pause">
            <img
              src={pause}
              alt="Pause icon"
              onClick={() => setTimerOn(false)}
            />
          </button>
        )}
        <button className="stop">
          <img
            src={stop}
            alt="Stop icon"
            onClick={() => {
              setTimerOn(false);
              saveTime(id);
            }}
          />
        </button>
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
