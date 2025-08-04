import SudokuNavBar from "./SudokuNavBar"
import styles from "../modes.module.css"
import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";

export default function Preferences(props) {

    // const [mode, setMode] = useState("lightmode");
    const [textColor, setTextColor] = useState("black");

    return <>
            <SudokuNavBar/>
            <Container>
                <h1 style={{marginTop: 25}}>Preferences</h1>
                {/* <button onClick={() => setMode((prev) => mode === "lightmode" ? "darkmode" : "lightmode")}>{mode === "lightmode" ? "Turn on darkmode" : "Turn on light mode"}</button> */}
                <p  style={{color: "" + textColor}}>To be implemented</p>
            </Container>

            <p>Text Color</p>
            <Container>
                <Row>
                    <Col>
                        <button onClick={() => setTextColor("red")}>Red</button>
                    </Col>
                    <Col>
                        <button onClick={() => setTextColor("blue")}>Blue</button>
                    </Col>
                    <Col>
                        <button onClick={() => setTextColor("green")}>Green</button>
                    </Col>
                    <Col>
                        <button onClick={() => setTextColor("black")}>Black</button>
                    </Col>
                </Row>
            </Container>

            {/* <p>Paragraph text size</p>
            <input></input>
         */}
        
        
    </>
}