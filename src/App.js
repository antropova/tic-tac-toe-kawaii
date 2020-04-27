import React from 'react'
import Game from './Game'
import { TicTacToeSvg } from './TicTacToeSvg'

function App() {
  return (
    <div className="tic-tac-toe">
      <header>
        <div style={{ textAlign: 'center' }}>
          <TicTacToeSvg />
        </div>
      </header>
      <Game />
    </div>
  );
}

export default App
