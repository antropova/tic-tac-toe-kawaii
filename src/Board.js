import React from 'react'
import Cell from './Cell'

const GRID = {
  a: [1, 2, 3],
  b: [1, 2, 3],
  c: [1, 2, 3],
}

const CELLS = [0, 1, 2, 3, 4, 5, 6, 7, 8]

class Board extends React.Component {
  renderCells = () => {
    return CELLS.map(cell => {
      return (
        <div key={cell} className="box">
          <Cell col={cell} row={cell} turn={this.props.turn} takeTurn={this.props.takeTurn} />
        </div>
      )
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
