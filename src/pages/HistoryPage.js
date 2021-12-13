import React from "react";
import HistoryTable from "../components/HistoryTable";
import Navigation from "../components/Navigation";

function HistoryPage() {
  return (
    <>
      <Navigation />
      <main>
        <HistoryTable />
      </main>
    </>
  );
}

export default HistoryPage;
