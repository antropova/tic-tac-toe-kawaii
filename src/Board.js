import React from 'react'
import Cell from './Cell'
import { Grid, Row } from 'react-flexbox-grid'

const GRID = {
  row1: ['col1', 'col2', 'col3'],
  row2: ['col1', 'col2', 'col3'],
  row3: ['col1', 'col2', 'col3'],
}

class Board extends React.Component {
  renderBoardRow = row => {
    return GRID[row].map(el => <Cell key={el} row={row} el={el} />);
  }

  renderBoardCols = () => {
    return Object.keys(GRID).map(row => {
      return (
        <Row key={row}>
          {this.renderBoardRow(row)}
        </Row>
      )
    })
  }

  render() {
    return (
      <div className="board">
        <Grid fluid>
          {this.renderBoardCols()}
        </Grid>
      </div>
    )
  }
}

export default Board
