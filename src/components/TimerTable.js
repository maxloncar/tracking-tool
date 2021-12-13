import React from "react";
import Timer from "./Timer";
import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import ReactPaginate from "react-paginate";
import caretleft from "../assets/caretleft.svg";
import caretright from "../assets/caretright.svg";

export default function TimerTable() {
  const { currentUser } = useAuth();
  const [timers, setTimers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const timersPerPage = 4;
  const pagesVisited = pageNumber * timersPerPage;

  const displayTimers = timers
    .slice(pagesVisited, pagesVisited + timersPerPage)
    .map((timer) => (
      <Timer
        key={timer.id}
        id={timer.id}
        description={timer.description}
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
    <div className="timer_table">
      <ul>
        <li>Time logged</li>
        <li>Description</li>
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
  );
}
