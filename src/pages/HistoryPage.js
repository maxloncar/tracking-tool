import React from 'react'
import Filter from '../components/Filter';
import HistoryTable from '../components/HistoryTable';
import Navigation from "../components/Navigation";
import PageNumbers from '../components/PageNumbers';

function HistoryPage() {
    return (
        <>
            <Navigation />
            <main>
                <h2>Trackers History</h2>
                <Filter />
                <HistoryTable />
                <PageNumbers />
            </main>
        </>
    )
}

export default HistoryPage;