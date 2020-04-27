import React from 'react'
import Cell from './Cell'
import { Grid, Row } from 'react-flexbox-grid'

const GRID = {
  a: [1, 2, 3],
  b: [1, 2, 3],
  c: [1, 2, 3],
}

class Board extends React.Component {
  renderBoardCols = row => {
    return GRID[row].map(col => <Cell key={col} position={`${col}` + `${row}`} turn={this.props.turn} takeTurn={this.props.takeTurn} />);
  }

  renderBoardRows = () => {
    return Object.keys(GRID).map(row => {
      return (
        <Row key={row}>
          {this.renderBoardCols(row)}
        </Row>
      )
    })
  }

  render() {
    return (
      <div className="board">
        <Grid fluid>
          {this.renderBoardRows()}
        </Grid>
      </div>
    )
  }
}

export default Board
