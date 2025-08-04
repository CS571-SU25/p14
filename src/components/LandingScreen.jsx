import { Nav } from 'react-bootstrap';
export default function LandingScreen() {
    return <div>
        <h1> Sudoku Links</h1>
        <Nav style={{justifyContent: "center", backgroundColor: "#EEEEEE"}}>
            <Nav.Item>
                <Nav.Link href="#play-sudoku">Play Sudoku</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#how-to">How To Play</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#strategies">Strategies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#other-games">Other Games</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#preferences">Preferences</Nav.Link>
            </Nav.Item>
        </Nav>
        <p>
            The <strong>Play Sudoku</strong> link leads to a page with an empty sudoku board. 
            The user can insert the numbers of an uncompleted sudoku board then press the <strong>Set Values</strong> button to set those values.
            Then the user can solve the sudoku game and the board will stay the same even if the page reloads.
            When the user wants to start a new game they can press the <strong>New Game</strong> button and reload the screen.
        </p>
        <p>
            The <strong>How To Play</strong> screen explains the rules of sudoku.
        </p>
        <p>
            The <strong>Strategies</strong> screen explains some common sudoku strategies sorted by difficulty level.
        </p>
        <p>
            The <strong>Other Games</strong> page suggests some other logic puzzles that the user might enjoy if they like sudoku.
        </p>
        <p>
            The <strong>Preferences</strong> page allows the user to change the color of the text on the screen, whether input labels are being used for the sudoku board (the default is using input labels), the color of the navigation bar and the placement of the navigation bar.
        </p>
    </div>
}