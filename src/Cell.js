import React from 'react'
import { Col }  from 'react-flexbox-grid'
import { Ghost } from 'react-kawaii'

class Cell extends React.Component {
  onClick = () => {
    const { row, el } = this.props
    console.log(el, row)
  }

  render() {
    // ko = 0
    // shocked = X
    return (
      <Col xs={6} md={3} style={{ padding: '15px 30px 15px 20px', border: '1px solid #ccc', cursor: 'pointer' }} onClick={this.onClick}>
        <div style={{ margin: '0px 30px 0 15px', padding: '0px 15px 0 0' }}>
          <Ghost size={100} mood="ko" color="#E0E4E8" />
        </div>
      </Col>
    )
  }
}

export default Cell
