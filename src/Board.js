import React from 'react'
import Cell from './Cell'

const GRID = {
  a: [0, 1, 2],
  b: [0, 1, 2],
  c: [0, 1, 2],
}

const CELLS = [0, 1, 2, 3, 4, 5, 6, 7, 8]

class Board extends React.Component {
  renderCells = () => {
    return Object.keys(GRID).map(row => {
      return GRID[row].map(position => {
        let coordinate = `${row}${position}`
        return (
          <Cell
            key={coordinate}
            row={row}
            position={position}
            turn={this.props.turn}
            takeTurn={this.props.takeTurn}
          />
        )
      })
    })
  }

  render() {
    return (
      <div className="game-board">
        { this.renderCells() }
      </div>
    )
  }
}

export default Board
