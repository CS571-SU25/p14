import { Navbar, Container, Nav } from 'react-bootstrap';

export default function SudokuNavBar() {
    return <Navbar bg="light" data-bs-theme="light" fixed="top">
            <Container>
                <Navbar.Brand>Sudoku</Navbar.Brand>
                <Nav.Link href="#play-sudoku">Play Sudoku</Nav.Link>
                <Nav.Link href="#how-to">How to play</Nav.Link>
                <Nav.Link href="#strategies">Strategies</Nav.Link>
                <Nav.Link href="#other-games">Other Games</Nav.Link>
                <Nav.Link href="#preferences">Preferences</Nav.Link>
            </Container>
        </Navbar>
}