import hiddenPairs from "../../images/hiddenPairs.jpg"
import nakedPairs from "../../images/nakedPairs.jpg"
import { Container, Col, Row } from "react-bootstrap"

export default function Intermediate() {

    return <>
        <h2>Intermediate strategies</h2>
        
        <h3>Hidden Pairs (or triplets or quads)</h3>
        <Container>
            <Row>
                <Col>
                    <img src={hiddenPairs} width={300} alt="Image of a 3x3 box of cells. The cells in the bottom row and the middle right cell are filled out with numbers 4, 7, 8, and 9. The remaining cells have notes on what numbers they can be. While there doesn't seem to be a pattern about the numbers 1-3, the numbers 5 and 6 only reside in the two empty cells in the middle column."></img>
                </Col>
                <Col>
                    <p>
                        Hidden pairs are when n numbers each can only be in the same n cells in a box, row, or column. 
                        Because these n numbers can only fit in these n cells, no other numbers can fit in any of the n cells because if another value was placed in one of the cells there wouldn't be enough room for teh n numbers that need the n cells.
                        
                    </p>
                    <p>
                        For example, in the image to the left the only places in the box that the numbers 5 and 6 can go are in the two empty cells in the middle column.
                        The box needs both the numbers 5 and 6, so if the numbers 1, 2, or 3 filled one of those two cells then the box wouldn't be able to have all the numbers it needed and the solution wouldn't work.
                        Therefore we can eliminate the possibility of the numbers 1, 2, or 3 in those two cells and remove those notes.
                    </p>
                </Col>
            </Row>
            
        </Container>

        <h3>Naked pairs (or triplets or quads)</h3>
        <Container>
            <Row>
                <Col>
                    <img src={nakedPairs} width={300} alt="Image of a 3x3 box of cells. The cells in the bottom row and the middle right cell are filled out with numbers 4, 7, 8, and 9. The remaining cells have notes on what numbers they can be. The remaining cells in the left and right columns have notes of some of the numbers 1, 2, 3, 5, or 6 with little to no pattern, however the empty cells in the middle row only have the numbers 5 and 6 in them."></img>
            
                </Col>
                <Col>
                    <p>
                        If n amount of cells only have n possible numbers in a box, row, or column, then those n numbers can't be in any of the other cells in the box.
                        This is because if the n numbers are in other cells then there will only be n-1 numbers for n cells, which will leave a cell empty.
                        Therefore you can remove the n number from the other cells in the box, row, or column.
                    </p>
                    <p>
                        For example, the two cells in the middle column only have the notes 5 and 6, so if the numbers 5 or 6 were used on one of the other cells in the box, one of the cells in the middle column wouldn't be able to be filled with a number.
                        Therefore, the two cells in the middle column are the only cells in the box that can contain a 5 or a 6 so we can remove the notes 5 and 6 from the other cells in the box.
                    </p>
                </Col>
            </Row>
            
        </Container>
    </>
}