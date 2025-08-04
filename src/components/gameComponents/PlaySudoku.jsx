import { Container, Row, Col, Button } from "react-bootstrap"
import { useState } from 'react'

import Board from './Board'
import SudokuNavBar from "../SudokuNavBar"

export default function Game() {
    const preferences = sessionStorage.getItem("preferences") ? JSON.parse(sessionStorage.getItem("preferences")) : {
        pColor: "black",
        hColor: "black"
    };

    
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


    
    return <>
        <SudokuNavBar></SudokuNavBar>
        
        <h1 style={{marginTop: 25, color: preferences.hColor}}>Sudoku Game</h1>
        <Board></Board>
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