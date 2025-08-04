import { Table } from "react-bootstrap"
import Cell from './Cell'

export default function Board() {
    const nums = [0, 1, 2];


    // create a 3x3 grid of Cards with the Cards containing a 3x3 grid of Cells
    // The Cell in the top left has index 00 and the Cell in the bottom right has index 88.
    // For readability the three outside rows are created by copy and pasting instead of mapping. 
    return <Table>
        <tbody>
        <tr>
            {
                nums.map((square) => <td key={square}> 
                    <Table bordered>
                        <tbody>
                            {
                                nums.map((row) => <tr key={row}> {
                                        nums.map((col) => <td key={col}><Cell row={row} col={col + (square * 3)}></Cell></td>)
                                    }</tr>)
                            }
                        </tbody>
                    </Table>
                </td>)
            }
        </tr>
        <tr>
            {
                nums.map((square) => <td key={square}> 
                    <Table bordered>
                        <tbody>
                            {
                                nums.map((row) => <tr key={row}> {
                                    nums.map((col) => <td key={col}><Cell row={row + 3} col={col + (square * 3)}></Cell></td>)
                                }</tr>)
                            }
                        </tbody>
                    </Table>
                </td>)
            }
        </tr>
        <tr>
            {
                nums.map((square) => <td key={square}> 
                    <Table bordered>
                        <tbody>
                            {
                                nums.map((row) => <tr key={row}> {
                                    nums.map((col) => <td key={col}><Cell row={row + 6} col={col + (square * 3)}></Cell></td>)
                                }</tr>)
                            }
                        </tbody>
                    </Table>
                </td>)
            }
        </tr>
        </tbody>
    </Table>
}