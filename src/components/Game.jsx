import { Container, Row, Col } from "react-bootstrap"
import { Navbar } from 'react-bootstrap';
import Cell from './Cell'

export default function Game() {

    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    return <>
        
        <Container>  
            {
                nums.map((row) => <Row key={row}>
                            {
                                nums.map((col) => <Col key={col}><Cell row={row} col={col}></Cell></Col>)
                            }
                    </Row>)
            }
        </Container>
    </>
    
}