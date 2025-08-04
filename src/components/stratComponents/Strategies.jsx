import { Pagination } from 'react-bootstrap';
import { useState } from 'react'
import SudokuNavBar from "../SudokuNavBar"
import Beginner from './beginner';
import Intermediate from './Intermediate';
import Advanced from './Advanced';

export default function Strategies() {
    const preferences = sessionStorage.getItem("preferences") ? JSON.parse(sessionStorage.getItem("preferences")) : {
        pColor: "black",
        hColor: "black"
    };

    const [page, setPage] = useState("Beginner");

    return <>
        <SudokuNavBar></SudokuNavBar>
        <h1 style={{marginTop: 25, color: preferences.hColor}}>Strategies</h1>
        <Pagination>
            <Pagination.Item onClick={() => setPage("Beginner")} active={page === "Beginner"}>Begginer</Pagination.Item>
            <Pagination.Item onClick={() => setPage("Intermediate")} active={page === "Intermediate"}>Intermediate</Pagination.Item>
            <Pagination.Item onClick={() => setPage("Advanced")} active={page === "Advanced"}>Advanced</Pagination.Item>
        </Pagination>
        {
            page === "Beginner" ? <Beginner preferences={preferences}></Beginner> : <></>
        }
        {
            page === "Intermediate" ? <Intermediate preferences={preferences}></Intermediate> : <></>
        }
        {
            page === "Advanced" ? <Advanced preferences={preferences}></Advanced> : <></>
        }
    </>
}