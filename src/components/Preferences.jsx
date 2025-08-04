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
        navPlacement: "top",
        useLabels: "true"
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
            </Container>

            <p style={pStyle}>Navigation Bar Color</p>
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
                        })} style={{color: "white", backgroundColor: "black"}}
                        id="Dark mode navigation bar">
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
                        })} id="Blue mode navigation bar">
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
                        })} style={{color: "black", backgroundColor: "white"}} id="Light mode navigation bar">
                            Light
                        </Button>
                    </Col>
                </Row>
            </Container>

            <p style={pStyle}> Navigation Bar placement </p>
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
                        })} id="Top navigation bar">
                            Top
                        </Button >
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
                        })} id="bottom navigation bar">
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
                        })} style={{color: "#ca0e01ff", backgroundColor: "white"}}  id="red text">Red</Button>
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
                        })} style={{color: "#3944BC", backgroundColor: "white"}} id="blue text">Blue</Button>
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
                        })} style={{color: "#02794dff", backgroundColor: "white"}} id="green text">Green</Button>
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
                        })} style={{color: "#000000", backgroundColor: "white"}} id="black text">Black</Button>
                    </Col>
                </Row>
            </Container>



            <p style={pStyle}> Labels </p>
            <Button onClick={() => setPreferences((prev) => {
                let temp = {};
                for (let key in prev) {
                    temp[key] = prev[key];
                }
                temp.useLabels = prev.useLabels === "true" ? "false" : "true";
                sessionStorage.setItem("preferences", JSON.stringify(temp));
                return temp;
                })} id="change labels preferences">
                    Turn {preferences.useLabels === "true" ? "OFF" : "ON"} Labels
            </Button>
                   

            
        
        
    </>
}