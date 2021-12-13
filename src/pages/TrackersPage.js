import React from "react";
import Datetime from "../components/Datetime";
import Navigation from "../components/Navigation";
import StartNewTimerButton from "../components/StartNewTimerButton";
import StopAllButton from "../components/StopAllButton";
import TimerTable from "../components/TimerTable";

function TrackersPage() {
  return (
    <>
      <Navigation />
      <main>
        <Datetime />
        <div className="start_stop">
          <StartNewTimerButton />
          <StopAllButton onClick={write} />
        </div>
        <TimerTable />
      </main>
    </>
  );
}

export default TrackersPage;
