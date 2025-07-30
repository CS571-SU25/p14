import { Pagination } from 'react-bootstrap';
import { useState } from 'react'
import SudokuNavBar from "./SudokuNavBar"

export default function Strategies() {
    const [page, setPage] = useState("Begginer");

    return <>
        <SudokuNavBar></SudokuNavBar>
        <h1 style={{marginTop: 25}}>Strategies</h1>
        <Pagination>
            <Pagination.Item onClick={() => setPage("Begginer")} active={page === "Begginer"}>Begginer</Pagination.Item>
            <Pagination.Item onClick={() => setPage("Intermediate")} active={page === "Intermediate"}>Intermediate</Pagination.Item>
            <Pagination.Item onClick={() => setPage("Advanced")} active={page === "Advanced"}>Advanced</Pagination.Item>
        </Pagination>
    </>
}