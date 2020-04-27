import React from 'react'
import { Col }  from 'react-flexbox-grid'
import { Ghost } from 'react-kawaii'

const style = {
  col: { padding: '15px 30px 15px 20px', border: '1px solid #ccc', cursor: 'pointer' },
  colDiv: { margin: '0px 30px 0 15px', padding: '0px 15px 0 0' }
}

class Cell extends React.Component {
  state = {
    mood: '',
    color: '',
    taken: false,
  }

  onClick = () => {
    const { position, takeTurn, turn } = this.props
    console.log(position)
    const { taken } = this.state

    if (!taken) {
      if (turn === 'X') this.setState({ mood: 'ko', color: 'pink' })
      if (turn === 'O') this.setState({ mood: 'shocked', color: 'yellow' })
      this.setState({ taken: true })
      takeTurn()
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
      <Col xs={6} md={3} style={style.col} onClick={this.onClick}>
        <div style={style.colDiv}>
          { taken && <Ghost size={100} mood={mood} color={color} /> }
        </div>
      </Col>
    )
  }
}

export default Cell
