import React from "react";
import HistoryTimer from "./HistoryTimer";
import { db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import close from "../assets/close.svg";
import date from "../assets/calendar.svg";
import ReactPaginate from "react-paginate";
import caretleft from "../assets/caretleft.svg";
import caretright from "../assets/caretright.svg";

export default function HistoryTable() {
  const { currentUser } = useAuth();
  const [timers, setTimers] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const timersPerPage = 4;
  const pagesVisited = pageNumber * timersPerPage;

  const displayTimers = timers
    .slice(pagesVisited, pagesVisited + timersPerPage)
    .filter((timer) => {
      let currentDate = timer.date.seconds;
      let startingDate = new Date(startDate / 1000).getTime();
      let endingDate = new Date(endDate / 1000).getTime();
      if (searchTerm.trim().length === 0 && !startingDate && !endingDate) {
        return timer;
      } else if (currentDate >= startingDate && currentDate <= endingDate) {
        if (
          searchTerm.trim().length !== 0 &&
          timer.description.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return timer;
        } else if (searchTerm.trim().length !== 0) {
          return false;
        }
        return timer;
      } else if (
        timer.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !startingDate &&
        !endingDate
      ) {
        return timer;
      }

      return false;
    })
    .map((timer) => (
      <HistoryTimer
        key={timer.id}
        id={timer.id}
        description={timer.description}
        date={new Date(timer.date.seconds * 1000).toLocaleDateString("hr-HR")}
        hours={timer.hours}
        minutes={timer.minutes}
        seconds={timer.seconds}
      />
    ));

  const pageCount = Math.ceil(timers.length / timersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
    <>
      <h2>Trackers History</h2>
      <section className="filter_container">
        <div className="start_date">
          <p>Start date</p>
          <div className="pick_date">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd.MM.yyyy."
            />
            <img src={date} alt="Date Icon" onClick={() => setStartDate()} />
          </div>
        </div>
        <div className="end_date">
          <p>End date</p>
          <div className="pick_date">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd.MM.yyyy."
            />
            <img src={date} alt="Date Icon" onClick={() => setEndDate()} />
          </div>
        </div>
        <div className="description_contains">
          <div className="close_desc">
            <p>Description contains</p>
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <img
              src={close}
              alt="Date Icon"
              onClick={() => setSearchTerm("")}
            />
          </div>
        </div>
      </section>
      <div className="history_table">
        <ul>
          <li>Date</li>
          <li>Description</li>
          <li>Time tracked</li>
          <li>Actions</li>
        </ul>
        {displayTimers}
        <ReactPaginate
          previousLabel={<img src={caretleft} alt="Caretleft" />}
          nextLabel={<img src={caretright} alt="Caretright" />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="page_numbers"
          previousLinkClassName="previousBttn"
          nextLinkClassName="nextBttn"
          disabledClassName="paginationDisabled"
          activeClassName="pageBttnActive"
          pageClassName="pageBttn"
        />
      </div>
    </>
  );
}
