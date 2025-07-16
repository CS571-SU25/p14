import { Navbar, Card, Nav } from 'react-bootstrap';
import { Container } from "react-bootstrap"
export default function HowTo() {
    return <>
        <Navbar bg="light" data-bs-theme="light" fixed="top">
            <Container>
                <Navbar.Brand>Sudoku</Navbar.Brand>
                
                <Nav.Link href="#play-sudoku">Play Sudoku</Nav.Link>
                <Nav.Link href="#how-to">How to play</Nav.Link>
                <Nav.Link href="#strategies">Strategies</Nav.Link>
            </Container>
        </Navbar>
        <h1>How to play sudoku</h1>
    </>
}