import React from 'react'
import Board from './Board'

// const WINNING_COMBOS = [
//   ['a1', 'a2', 'a3'],
//   ['b1', 'b2', 'b3'],
//   ['c1', 'c2', 'c3'],
//   ['a1', 'b2', 'c3'],
//   ['a3', 'b2', 'c1'],
// ]

const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

class Game extends React.Component {
  state = {
    turn: 'x',
    xCells: [],
    oCells: [],
    grid: {
      a: [0, 1, 2],
      b: [0, 1, 2],
      c: [0, 1, 2],
    }
  }

  checkIfWon = (row, turn) => {
    const { grid } = this.state

    let rowMatch = grid[row].filter(el => el === turn)
    if (rowMatch.length === 3) {
      alert(`Player ${turn} won!`)
    }

    let firstColMatch = Object.values(grid).map(row => row[0]).filter(el => el === turn)
    if (firstColMatch.length === 3) {
      alert(`Player ${turn} won!`)
    }

    let secondColMatch = Object.values(grid).map(row => row[1]).filter(el => el === turn)
    if (secondColMatch.length === 3) {
      alert(`Player ${turn} won!`)
    }

    let thirdColMatch = Object.values(grid).map(row => row[2]).filter(el => el === turn)
    if (thirdColMatch.length === 3) {
      alert(`Player ${turn} won!`)
    }

    let firstDiagonalMatch = Object.values(grid).map((row, i) => {
      if (i === 0) return row[0]
      if (i === 1) return row[1]
      if (i === 2) return row[2]
    }).filter(el => el === turn)

    if (firstDiagonalMatch.length === 3) {
      alert(`Player ${turn} won!`)
    }

    let secondDiagonalMatch = Object.values(grid).map((row, i) => {
      if (i === 0) return row[2]
      if (i === 1) return row[1]
      if (i === 2) return row[0]
    }).filter(el => el === turn)

    if (secondDiagonalMatch.length === 3) {
      alert(`Player ${turn} won!`)
    }
  }

  takeTurn = (row, position) => {
    const { grid, turn, oCells, xCells } = this.state
    let myGrid = {...grid}

    // replace cells

    if (turn === 'x') {
      let xTurns = [...xCells]
      xTurns.push(position)
      myGrid[row][position] = turn
      this.setState({ turn: 'o', xCells: xTurns, grid: myGrid })
      this.checkIfWon(row, turn)
    } else {
      let oTurns = [...oCells]
      oTurns.push(position)
      myGrid[row][position] = turn
      this.setState({ turn: 'x', oCells: oTurns, grid: myGrid })
      this.checkIfWon(row, turn)
    }
  }

  render() {
    return (
      <div className="game">
        <Board
          turn={this.state.turn}
          takeTurn={this.takeTurn}
        />
      </div>
    )
  }
}

export default Game
