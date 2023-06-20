import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateRandomNumber = () => {
    const number = Math.ceil(Math.random() * 100)
    this.setState(prevState => {
      console.log(`previous count is ${prevState.count}`)
      return {count: prevState.count + number}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button
            type="button"
            className="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
