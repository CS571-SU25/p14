import SudokuNavBar from "./SudokuNavBar";

export default function OtherGames(props) {
    return <>
        <SudokuNavBar/>
        <h1 style={{marginTop: 25}}>Other games</h1>
        <h2>Killer Sudoku</h2>
        <p>
            Killer sudoku is played on a sudoku board with the addition of "cages" which are groups of cells that have to add up to a specific number. 
            Killer sudoku follows the same rules as sudoku with the additional rule that the sum of all the cells in a cage must add up to the number in the upper left 
            corner of the cage and none of the cells in the cage can have repeating numbers.
        </p>
        <p>Killer sudoku is a fun game if you like the style of sudoku but want to learn new strategies and if you like math puzzles.</p>
        <p>If you're frutstrated with calculating so many sums to figure out what numbers can be in a grid you can find killer sudoku cheat sheets that show all the possible combinations of numbers 1-9 to add up to a specific number.</p>

        <h2>Kakuro</h2>
        <p>
            Kakuro is another logic puzzle that uses a lot of math. 
            In Kakuro there are columns and rows of different lengths each labeled with a number.
            The cells in each column and row must add up to the label of the column or row. 
            No repeat numbers are allowed in a row or column and every cell must be labeled with a number from 1-9.
        </p>
        <p>
            Kakuro is a fun game if you like the math aspect of killer sudoku. 
            If you enjoy finding patterns in math and want a bit of a brain excersize, kakuro is a good game to try.
        </p>
        <p>The killer sudoku cheat sheet is also helpful for kakuro.</p>

        <h2>Futoshiki</h2>
        <p>
            Futoshiki is a logic puzzle usually played in a grid between the sizes of 4x4 and 9x9.
            Between some of the cells there are greater than or less than signs.
        </p>
        <p>
            Similarly to sudoku, each cell must contain a number from 1-9 and no repeat numbers are allowed in rows or columns.
            In addition, if there is a greater than or less than sign between two cells, the number in the cell on the greater than side must be greater than the number on the cell it's connected to.
        </p>
        <p>
            Futoshiki is fun if you want another numbers based logic puzzle but you don't want to do math.
        </p>
    </>
}