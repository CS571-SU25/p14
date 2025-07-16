import { Navbar, Card, Nav } from 'react-bootstrap';
export default function LandingScreen() {
    return <div>
        <h1> Sudoku Links</h1>
        <Nav>
            <Nav.Item>
                <Nav.Link href="#play-sudoku">Play Sudoku</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#how-to">How To Play</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#strategies">Strategies</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
}