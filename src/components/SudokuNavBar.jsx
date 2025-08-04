import { Navbar, Container, Nav } from 'react-bootstrap';

export default function SudokuNavBar() {

    const preferences = sessionStorage.getItem("preferences") ? JSON.parse(sessionStorage.getItem("preferences")) : {
        navBG: "light",
        navTheme: "light",
        navPlacement: "top"
    };

    //<Navbar bg={preferences.navBG} data-bs-theme={preferences.navTheme} fixed="top">
    
    return <Navbar bg={preferences.navBg} data-bs-theme={preferences.navTheme} fixed={preferences.navPlacement}>
            <Container>
                <Navbar.Brand>Sudoku</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#play-sudoku">Play Sudoku</Nav.Link>
                    <Nav.Link href="#how-to">How to play</Nav.Link>
                    <Nav.Link href="#strategies">Strategies</Nav.Link>
                    <Nav.Link href="#other-games">Other Games</Nav.Link>
                    <Nav.Link href="#preferences">Preferences</Nav.Link>
                </Nav>
                
            </Container>
        </Navbar>
}