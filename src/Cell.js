import React from 'react'
import { Ghost } from 'react-kawaii'

class Cell extends React.Component {
  state = {
    mood: '',
    color: '',
    taken: false,
  }

  onClick = () => {
    const { row, position, takeTurn, turn } = this.props
    const { taken } = this.state

    if (!taken) {
      if (turn === 'x') this.setState({ mood: 'ko', color: 'pink' })
      if (turn === 'o') this.setState({ mood: 'shocked', color: 'yellow' })
      this.setState({ taken: true })
      takeTurn(row, position)
    }

    // change x/o
    // track turn
    // track if run out of turns
    // track if won
    // trigger computer turn (random?)
  }

  render() {
    const { color, mood, taken } = this.state

    return (
      <div className="box" onClick={this.onClick}>
        <div className="box-ghost">
          { taken && <Ghost size={100} mood={mood} color={color} /> }
        </div>
      </div>
    )
  }
}

export default Cell
