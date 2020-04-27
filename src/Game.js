import React from 'react'
import Board from './Board'

const WINNING_COMBOS = [
  ['a1', 'a2', 'a3'],
  ['b1', 'b2', 'b3'],
  ['c1', 'c2', 'c3'],
  ['a1', 'b2', 'c3'],
  ['c1', 'b2', 'a3'],
]

class Game extends React.Component {
  state = {
    turn: 'X',
  }

  takeTurn = () => {
    const { turn } = this.state
    turn === 'X' ? this.setState({ turn: 'O' }) : this.setState({ turn: 'X' })
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
