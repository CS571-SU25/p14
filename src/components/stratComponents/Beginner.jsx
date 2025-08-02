import sudokuRowCol from "../../images/sudokuRowCol.jpg";
import lastCellInBox from "../../images/lastCellInBox.jpg";
import lastOptionInCell from "../../images/lastOptionInCell.jpg";
import { Container, Col, Row } from "react-bootstrap";

export default function Beginner() {

    return <>
        <h2>Beginning strategies</h2>
        
        <h3>Last Cell In Box, Row, or Column</h3>
        <Container>
            <Row>
                <Col>
                    <img src={lastCellInBox} width={300} alt="Image of a 3x3 box of cells  sudoku board. Each cell except for top left cell are filled in with a number 1-8. The top left cell has the number 9 written in as a note, but not filled in as a value for the cell."></img>
            
                </Col>
                <Col>
                    <p>
                        If a box, row, or column has all the numbers except for one filled out, then the uncompleted cell must be the number that the box, row, or column doesn't contain yet.
                    </p>
                    <p>
                        For example, in the image to the left all the cells the box already has cells with the numbers 1-8 in it, so the box just needs the number nine. 
                        Therefore the only uncompleted cell (the top left cell) must be the number 9.
                    </p>
                </Col>
            </Row>
            
        </Container>

        <h3>Last Option In Cell</h3>
        <Container>
            <Row>
                <Col>
                    <img src={lastOptionInCell} width={300} alt="Image of an incomplete sudoku board. One cell on the board has a note marking the number 9. The column of that cell has cells with the numbers 1, 7, and 5 filled out. The row of that cell has the numbers 2, 4, and 8 filled out. The box of that cell has the numbers 3 and 6 filled out."></img>
            
                </Col>
                <Col>
                    <p>
                        If a cell cannot be any of the numbers 1-9 except for one number then the value of the cell is the only number 1-9 that can fit in the cell.
                    </p>
                    <p>
                        For example, the cell in the picture noted with the number nine must be a nine because the column it's in already has 1, 7, and 5; the row that it's in already has 2, 4, and 8; and the box that it's in already has the numbers 3 and 6.
                        Because of that none of the numbers 1, 2, 3, 4, 5, 6, 7, or 8 can be in the cell, so the only possible option left is the number 9.
                    </p>
                </Col>
            </Row>
            
        </Container>
    </>
}