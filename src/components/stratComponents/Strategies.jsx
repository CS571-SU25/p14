import { Pagination } from 'react-bootstrap';
import { useState } from 'react'
import SudokuNavBar from "../SudokuNavBar"
import Beginner from './beginner';
import Intermediate from './Intermediate';
import Advanced from './Advanced';

export default function Strategies() {
    const [page, setPage] = useState("Beginner");

    return <>
        <SudokuNavBar></SudokuNavBar>
        <h1 style={{marginTop: 25}}>Strategies</h1>
        <Pagination>
            <Pagination.Item onClick={() => setPage("Beginner")} active={page === "Beginner"}>Begginer</Pagination.Item>
            <Pagination.Item onClick={() => setPage("Intermediate")} active={page === "Intermediate"}>Intermediate</Pagination.Item>
            <Pagination.Item onClick={() => setPage("Advanced")} active={page === "Advanced"}>Advanced</Pagination.Item>
        </Pagination>
        {
            page === "Beginner" ? <Beginner></Beginner> : <></>
        }
        {
            page === "Intermediate" ? <Intermediate></Intermediate> : <></>
        }
        {
            page === "Advanced" ? <Advanced></Advanced> : <></>
        }
    </>
}