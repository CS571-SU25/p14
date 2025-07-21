import { Form } from 'react-bootstrap'
import { useState } from 'react'
export default function Cell(props) {

    const [value, setValue] = useState(sessionStorage.getItem("gridValues") ? JSON.parse(sessionStorage.getItem("gridValues"))[(props.row * 9) + props.col] : "");


    
    function changeGrid(val) {
        let grid = [];
        
        // if it's not a number from 1 to 9 (or 0 for delete) then don't save the value 
        const num = Number.parseInt(val);
        if (num) {
            if (num < 0 ) {
                return;
            }
            if (num > 9) {
                // if the value is greater than 9 clear the square because otherwise it saves the tens digit
                val = "0";
            }
        } else {
            //don't include non-integers
            return;
        }
        if (val.includes(".")) {
            //don't include anything after a period (values must be integers)
            return;
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

    return <>
        <Form>
            {
                sessionStorage.getItem("savedValues") !== "null" &&sessionStorage.getItem("savedValues") !== null && JSON.parse(sessionStorage.getItem("savedValues"))[(props.row * 9) + props.col] ? 
                    <strong>{value}</strong> : 
                    <Form.Control onChange={(input) => changeGrid(input.target.value)} placeholder={sessionStorage.getItem("gridValues") ? (value === "0" ? "": value) : ""} id={"" + props.row + props.col}></Form.Control>
            }
        </Form>
    </>
}