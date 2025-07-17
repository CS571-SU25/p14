import { Navbar, Card, Nav } from 'react-bootstrap';
import { Container } from "react-bootstrap"
import sudokuRowCol from "../images/sudokuRowCol.jpg";
import sudokuSquare from "../images/sudokuSquare.jpg";
import SudokuNavBar from "./SudokuNavBar"

export default function HowTo() {
    return <>
        <SudokuNavBar></SudokuNavBar>
        <p></p>
        <h1>How to play sudoku</h1>
        <h2>Rules for cells</h2>
        <p>Each cell must contain a number between 1 and 9</p>

        <h2>Rules for columns and rows</h2>
        <img src={sudokuRowCol} width={300} alt="Image of an incomplete sudoku board. One row has two cells with 1s which are drawn in red with an x. Similarly, one column has two cells with 6s in it and the cells with sixes are red and theres an x marking them."></img>
        <p>Each cell in a row or column must have a unique number and each row and column must have numbers 1-9.</p>

        <h2>Rules for squares</h2>
        <img src={sudokuSquare} width={300} alt="Image of 3 by 3 sudoku square with two cells with the number three written in red with an x."></img>
        <p>Each cell in a box must have a unique number and each box must have numbers 1-9.</p>
    </>
}