import React from "react";
import HistoryTable from "../components/HistoryTable";
import Navigation from "../components/Navigation";
import PageNumbers from "../components/PageNumbers";

function HistoryPage() {
  return (
    <>
      <Navigation />
      <main>
        <HistoryTable />
        <PageNumbers />
      </main>
    </>
  );
}

export default HistoryPage;
