import { Form } from 'react-bootstrap'
import { useState } from 'react'
export default function Cell(props) {

    const [value, setValue] = useState(sessionStorage.getItem("gridValues") ? JSON.parse(sessionStorage.getItem("gridValues"))[(props.row * 9) + props.col] : "");

    // <p>{props.row}{props.col}</p>
    function changeGrid(val) {
        let grid = [];
        
        if (sessionStorage.getItem("gridValues") && sessionStorage.getItem("gridValues") !== "0") {
            const oldGrid = JSON.parse(sessionStorage.getItem("gridValues"));
            for (let cell of oldGrid) {
                grid.push(cell);
            }
        } else {

            for (let i = 0; i < 81; i++) {
                grid.push(0);
            }

        }
        grid[ (props.row * 9) + props.col] = val;

        sessionStorage.setItem("gridValues", JSON.stringify(grid));
        // console.log("val: " + val + " grid " + grid);
        setValue(val);
        
    }

    return <>
        <Form>
            <Form.Control onChange={(input) => changeGrid(input.target.value)} placeholder={sessionStorage.getItem("gridValues") ? (value === 0 ? "": value) : ""} ></Form.Control>
        </Form>
    </>
}