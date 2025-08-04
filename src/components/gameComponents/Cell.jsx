import { Form } from 'react-bootstrap'
import { useState } from 'react'
export default function Cell(props) {

    // const [value, setValue] = useState(sessionStorage.getItem("gridValues") ? JSON.parse(sessionStorage.getItem("gridValues"))[(props.row * 9) + props.col] : "");
    const [value, setValue] = useState(sessionStorage.getItem("gridValues") ? JSON.parse(sessionStorage.getItem("gridValues"))[(props.row * 9) + props.col] : "");

    const isDisabled = sessionStorage.getItem("savedValues") !== "null" && sessionStorage.getItem("savedValues") !== null && JSON.parse(sessionStorage.getItem("savedValues"))[(props.row * 9) + props.col];

    
    function changeGrid(val) {
        let grid = [];
        
        // if it's not a number from 1 to 9  then don't save the value 
        const num = Number.parseInt(val);
        if (num) {
            if (num <= 0 ) {
                return;
            }
            if (num > 9) {
                // if the value is greater than 9 don't change it
                return;
            }
        } else if (val === "") {
            //if the value is "" save it beacuse it means you're deleting a number
        }else {
            //don't include non-integers
            setValue("");
            return;
        }
        if (val.length > 1) {
            //don't include anything after the number, so no decimals and no "7isagreatnumber"
            return;
        }
        

        if (sessionStorage.getItem("gridValues") && sessionStorage.getItem("gridValues") !== "0") {
            const oldGrid = JSON.parse(sessionStorage.getItem("gridValues"));
            for (let cell of oldGrid) {
                grid.push("" + cell);
            }
        } else {

            for (let i = 0; i < 81; i++) {
                grid.push("");
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
            <Form.Control disabled={isDisabled} 
                onChange={(input) => changeGrid(input.target.value)} 
                value={sessionStorage.getItem("gridValues") ? value : ""} 
                id={"" + props.row + props.col}/>
    
        </Form>
    </>
}