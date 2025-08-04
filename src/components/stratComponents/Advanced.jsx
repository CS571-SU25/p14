import { Container, Row, Col } from "react-bootstrap"
import xWing from "../../images/xWing.jpg";

export default function Advanced(props) {
    const hStyle = {
        color: props.preferences.hColor
    }
    const pStyle = {
        color: props.preferences.pColor
    }

    return <>
        <h2 style={hStyle}>Advanced strategies</h2>
        

        <h3 style={hStyle}> X wing</h3>
        <Container style={pStyle}>
            <Row>
                <Col>
                    <p>
                        The X wing technique takes place on a board where A and B are the only two cells in the same row that can contain the number n.
                        Similarly, C and D are the only two cells in their row that can contain the number n. 
                        A and C are in the same column and B and D are in the same column.
            
                        
                    </p>
                    <p>
                        If A has the value n, then none of the other cells in the column can have the value n.
                    </p>
                    <p>
                        If A doesn't have the value n, then B must be n, so D cannot be n and C must be n, so none of the cells other than C in their column can be n.
                    </p>
                    <p>
                        Therefore no matter the value of A none of the cells in A and C's column other than A and C can have the value n.
                        The same logic can be used to say that none of the cells other than B and D in their column can contain the number n.
                        Therefore the user can remove the notes for the number n for all the cells in A and C's column other than A and C and for those in B and D's column other than B and D.

                        This technique can also be done by changing the word row for column and the word column for row, rotating the technique 90 degrees.
                    </p>
                </Col>
                <Col>
                    <img src={xWing} width={300} alt="Image of a 9x9 sudoku board. There are four cells labeled with the letters A-D. The cells A and B are in  the same row, the cells C and D are in the same row, the cells A and C are in the same column, and the cells B and D are in the same column. This creates a square shape. In A and B's row A and B are marked with the notes for 8 and 9 and the other cells have values from 1-7. In C and D's row C and D are marked with teh notes 7 and 9 and the other cells in the row have the values 1-6 and 8. In A and C's column and in B and D's column various cells have notes for 9 as well as some other numbers."></img>
            
                </Col>
                <Col>
                    <p>
                        For example, in the image to the left, we can use the X wing strategy to eliminate some of the notes for 9. 
                        Because A and B are the only two cells in their row where 9 can be and C and D are the only two cells in thier row where 9 can be and A and C and B and D are in the same columns, we can use the X wing technique.
                    </p>
                    <p>
                        If A is 9 then C cannot be 9 and D must be 9. 
                        In this situation none of the cells in A, B, C, or D's columns can contain the number 9 except for A or D.
                    </p>
                    <p>
                        If A is not 9, then B must be 9 and D cannot be 9, so C must be 9.
                        In this situation none of the cells in A, B, C, or D's columns can contain the number 9 except for B or C.
                    </p>
                    <p>
                        Therefore, the only cells that can contain the number 9 in A and C's column are A and C, and the same applies for B and D.
                    </p>
                </Col>
            </Row>
            
        </Container>
    </>
}