import { Container, Row, Col, Button } from "react-bootstrap"
import { Navbar, Card } from 'react-bootstrap';
import Cell from './Cell'
import { useState } from 'react'

export default function Game() {

    const nums = [0, 1, 2];



    // create a 3x3 grid of Cards with the Cards containing a 3x3 grid of Cells
    // The Cell in the top left has index 00 and the Cell in the bottom right has index 88.
    // For readability the three outside rows are created by copy and pasting instead of mapping. 
    return <>
        <Container>  
            <Card>
                <Row>
                    {
                        nums.map((square) => <Col key={square}> 
                                    <Card>
                                        <Container>
                                            {
                                                nums.map((row) => <Row key={row}> {
                                                    nums.map((col) => <Col key={col}><Cell row={row} col={col + (square * 3)}></Cell></Col>)
                                                }</Row>)
                                            }
                                        </Container>
                                    </Card>
                                </Col>)
                    }
                </Row>
                <Row>
                    {
                        nums.map((square) => <Col key={square}> 
                                    <Card>
                                        <Container>
                                            {
                                                nums.map((row) => <Row key={row}> {
                                                    nums.map((col) => <Col key={col}><Cell row={row + 3} col={col + (square * 3)}></Cell></Col>)
                                                }</Row>)
                                            }
                                        </Container>
                                    </Card>
                                </Col>)
                    }
                </Row>
                <Row>
                    {
                        nums.map((square) => <Col key={square}> 
                                    <Card>
                                        <Container>
                                            {
                                                nums.map((row) => <Row key={row}> {
                                                    nums.map((col) => <Col key={col}><Cell row={row + 6} col={col + (square * 3)}></Cell></Col>)
                                                }</Row>)
                                            }
                                        </Container>
                                    </Card>
                                </Col>)
                    }
                </Row>
            </Card>
        </Container>
        <Container>
            <Row>
                <Col>
                    <Button onClick={() => {
                                sessionStorage.setItem("gridValues", 0)
                            }
                        }> New Game </Button>
                    <Button > Set values </Button>
                </Col>
            </Row>
        </Container>
        
    </>
    
}