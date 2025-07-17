import { Container, Row, Col, Button } from "react-bootstrap"
import { Navbar, Card, Nav } from 'react-bootstrap';
import Cell from './Cell'
import { useState } from 'react'

export default function Game() {

    const nums = [0, 1, 2];
    const [savedValues, setSavedValues] = useState(sessionStorage.getItem("savedValues"));

    function saveValues() {
        let temp = [];

        // if gridValues exist, save the grid values
        if (sessionStorage.getItem("gridValues") && sessionStorage.getItem("gridValues") !== "0") {
            
            for (let cell of JSON.parse(sessionStorage.getItem("gridValues"))) {
                // For each cell in the grid, put a boolean in the savedValues to say if it's saved
                temp.push(cell !== "0");
                //alert(cell);
            }

            sessionStorage.setItem("savedValues", JSON.stringify(temp));
            setSavedValues(temp);
        } else {
            alert("Can't save 0 values");
        }


        // console.log("SavedValues: " + savedValues);
        // console.log("SavedValues: " + sessionStorage.getItem("savedValues"));
    }


    // create a 3x3 grid of Cards with the Cards containing a 3x3 grid of Cells
    // The Cell in the top left has index 00 and the Cell in the bottom right has index 88.
    // For readability the three outside rows are created by copy and pasting instead of mapping. 
    return <>
        <Navbar bg="light" data-bs-theme="light" fixed="top">
            <Container>
                <Navbar.Brand>Sudoku</Navbar.Brand>
                
                <Nav.Link href="#play-sudoku">Play Sudoku</Nav.Link>
                <Nav.Link href="#how-to">How to play</Nav.Link>
                <Nav.Link href="#strategies">Strategies</Nav.Link>
                
                
            </Container>
        </Navbar>
        <p></p>
        <h1>Sudoku Game</h1>
        <p>To delete a number replace it with 0 and reload</p>
        <Container>  
            
                <Row>
                    {
                        nums.map((square) => <Col key={square}> 
                                    <Card>
                                        <Container>
                                            {
                                                nums.map((row) => <Row key={row}> {
                                                    nums.map((col) => <Col key={col}><Cell row={row} col={col + (square * 3)}></Cell></Col>)
                                                }</Row>)
                                            }
                                        </Container>
                                    </Card>
                                </Col>)
                    }
                </Row>
                <Row>
                    {
                        nums.map((square) => <Col key={square}> 
                                    <Card>
                                        <Container>
                                            {
                                                nums.map((row) => <Row key={row}> {
                                                    nums.map((col) => <Col key={col}><Cell row={row + 3} col={col + (square * 3)}></Cell></Col>)
                                                }</Row>)
                                            }
                                        </Container>
                                    </Card>
                                </Col>)
                    }
                </Row>
                <Row>
                    {
                        nums.map((square) => <Col key={square}> 
                                    <Card>
                                        <Container>
                                            {
                                                nums.map((row) => <Row key={row}> {
                                                    nums.map((col) => <Col key={col}><Cell row={row + 6} col={col + (square * 3)}></Cell></Col>)
                                                }</Row>)
                                            }
                                        </Container>
                                    </Card>
                                </Col>)
                    }
                </Row>
            
        </Container>
        <Container>
            <Row>
                <Col>
                    <Button onClick={() => {
                                sessionStorage.setItem("gridValues", 0);
                                sessionStorage.setItem("savedValues", null);
                                setSavedValues(null);
                            }
                        }> New Game </Button>
                    {
                        savedValues === "null" || savedValues === null ? <Button onClick={saveValues}> Set values </Button> : <></>
                    }
                </Col>
            </Row>
        </Container>
        
    </>
    
}