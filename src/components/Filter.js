import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import close from "../assets/close.svg";
import date from "../assets/calendar.svg";

export default function Filter() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <section className="filter_container">
      <div className="start_date">
        <p>Start date</p>
        <div className="pick_date">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd.MM.yyyy"
          />
          <img src={date} alt="Date Icon" />
        </div>
      </div>
      <div className="end_date">
        <p>End date</p>
        <div className="pick_date">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd.MM.yyyy"
          />
          <img src={date} alt="Date Icon" />
        </div>
      </div>
      <div className="description_contains">
        <div className="close_desc">
          <p>Description contains</p>
          <input type="text"></input>
          <img src={close} alt="Date Icon" />
        </div>
      </div>
    </section>
  );
}
