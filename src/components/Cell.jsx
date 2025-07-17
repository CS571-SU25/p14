import { Form } from 'react-bootstrap'
import { useState } from 'react'
export default function Cell(props) {

    const [value, setValue] = useState(sessionStorage.getItem("gridValues") ? JSON.parse(sessionStorage.getItem("gridValues"))[(props.row * 9) + props.col] : "");


    // <p>{props.row}{props.col}</p>
    function changeGrid(val) {
        let grid = [];
        
        // if it's not a number from 1 to 9 (or 0 for delete) then don't save the value 
        for (let i = 0; i < 11; i++) {

            // if the value is 1-9 (or 0) then leave the loop and save the value
            if (("" + i) === val) {
                break;
            }
            
            // if the value isn't 1-9 then don't save the value and instead return early
            if (i === 10) {
                return;
            }
        }

        if (sessionStorage.getItem("gridValues") && sessionStorage.getItem("gridValues") !== "0") {
            const oldGrid = JSON.parse(sessionStorage.getItem("gridValues"));
            for (let cell of oldGrid) {
                grid.push("" + cell);
            }
        } else {

            for (let i = 0; i < 81; i++) {
                grid.push("0");
            }

        }
        grid[ (props.row * 9) + props.col] = val;

        sessionStorage.setItem("gridValues", JSON.stringify(grid));
        // console.log("val: " + val + " grid " + grid);
        // setValue(parseInt(val));
        setValue(val);
    }

    // {sessionStorage.getItem("savedValues") !== "null"  && JSON.parse(sessionStorage.getItem("savedValues")) ? <p>saved</p> : <Form.Control onChange={(input) => changeGrid(input.target.value)} placeholder={sessionStorage.getItem("gridValues") ? (value === "0" ? "": value) : ""} ></Form.Control>}
//{/* <Form.Control onChange={(input) => changeGrid(input.target.value)} placeholder={sessionStorage.getItem("gridValues") ? (value === "0" ? "": value) : ""} ></Form.Control> */}
    return <>
        <Form>
            {
                sessionStorage.getItem("savedValues") !== "null" &&sessionStorage.getItem("savedValues") !== null && JSON.parse(sessionStorage.getItem("savedValues"))[(props.row * 9) + props.col] ? 
                    <strong>{value}</strong> : 
                    <Form.Control onChange={(input) => changeGrid(input.target.value)} placeholder={sessionStorage.getItem("gridValues") ? (value === "0" ? "": value) : ""} ></Form.Control>
            }
        </Form>
    </>
}