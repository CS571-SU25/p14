import SudokuNavBar from "./SudokuNavBar"
import { useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Preferences(props) {

    // const [mode, setMode] = useState("lightmode");
    const [preferences, setPreferences] = useState(sessionStorage.getItem("preferences") ? JSON.parse(sessionStorage.getItem("preferences")) : {
        pColor: "black",
        hColor: "black",
        navBG: "light",
        navTheme: "light",
        navPlacement: "top"
    });

    const hStyle = {
        color: preferences.hColor
    }
    const pStyle = {
        color: preferences.pColor
    }
    

    return <>
            <SudokuNavBar/>
            <Container style={hStyle}>
                <h1 style={{marginTop: 25}}>Preferences</h1>
                {/* <button onClick={() => setMode((prev) => mode === "lightmode" ? "darkmode" : "lightmode")}>{mode === "lightmode" ? "Turn on darkmode" : "Turn on light mode"}</button> */}
            </Container>

            <p style={pStyle}>NavBar Color</p>
            <Container>
                <Row>
                    <Col>
                        <Button onClick={() => setPreferences((prev) => {
                            let temp = {};
                            for (let key in prev) {
                                temp[key] = prev[key];
                            }
                            temp.navBg = "dark";
                            temp.navTheme = "dark";
                            sessionStorage.setItem("preferences", JSON.stringify(temp));
                            return temp;
                        })} style={{color: "white", backgroundColor: "black"}}>
                            Dark
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setPreferences((prev) => {
                            let temp = {};
                            for (let key in prev) {
                                temp[key] = prev[key];
                            }
                            temp.navBg = "primary";
                            temp.navTheme = "dark";
                            sessionStorage.setItem("preferences", JSON.stringify(temp));
                            return temp;
                        })}>
                            Blue
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setPreferences((prev) => {
                            let temp = {};
                            for (let key in prev) {
                                temp[key] = prev[key];
                            }
                            temp.navBg = "light";
                            temp.navTheme = "light";
                            sessionStorage.setItem("preferences", JSON.stringify(temp));
                            return temp;
                        })} style={{color: "black", backgroundColor: "white"}}>
                            Light
                        </Button>
                    </Col>
                </Row>
            </Container>

            <p style={pStyle}> NavBar placement </p>
            <Container>
                <Row>
                    <Col>
                        <Button onClick={() => setPreferences((prev) => {
                            let temp = {};
                            for (let key in prev) {
                                temp[key] = prev[key];
                            }
                            temp.navPlacement = "top";
                            sessionStorage.setItem("preferences", JSON.stringify(temp));
                            return temp;
                        })}>
                            Top
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setPreferences((prev) => {
                            let temp = {};
                            for (let key in prev) {
                                temp[key] = prev[key];
                            }
                            temp.navPlacement = "bottom";
                            sessionStorage.setItem("preferences", JSON.stringify(temp));
                            return temp;
                        })}>
                            Bottom
                        </Button>
                    </Col>
                </Row>
            </Container>

            <p style={pStyle}>Text Color</p>
            <Container>
                <Row>
                    <Col>
                        <Button onClick={() => setPreferences((prev) => {
                            let temp = {};
                            for (let key in prev) {
                                temp[key] = prev[key];
                            }
                            temp.pColor = "#ca0e01ff";
                            temp.hColor = "#820b02ff";
                            sessionStorage.setItem("preferences", JSON.stringify(temp));
                            return temp;
                        })} style={{color: "#ca0e01ff", backgroundColor: "white"}}>Red</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setPreferences((prev) => {
                            let temp = {};
                            for (let key in prev) {
                                temp[key] = prev[key];
                            }
                            temp.pColor = "#3944BC";
                            temp.hColor = "#091280ff"
                            sessionStorage.setItem("preferences", JSON.stringify(temp));
                            return temp;
                        })} style={{color: "#3944BC", backgroundColor: "white"}}>Blue</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setPreferences((prev) => {
                            let temp = {};
                            for (let key in prev) {
                                temp[key] = prev[key];
                            }
                            temp.pColor = "#02794dff";
                            temp.hColor = "#02583aff";
                            sessionStorage.setItem("preferences", JSON.stringify(temp));
                            return temp;
                        })} style={{color: "#02794dff", backgroundColor: "white"}}>Green</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setPreferences((prev) => {
                            let temp = {};
                            for (let key in prev) {
                                temp[key] = prev[key];
                            }
                            temp.pColor = "#000000";
                            temp.hColor = "#000000";
                            sessionStorage.setItem("preferences", JSON.stringify(temp));
                            return temp;
                        })} style={{color: "#000000", backgroundColor: "white"}}>Black</Button>
                    </Col>
                </Row>
            </Container>

            {/* <p>Paragraph text size</p>
            <input></input>
         */}
        
        
    </>
}