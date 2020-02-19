import React from 'react'

class Counter extends React.Component {
    constructor() {
        super() 

        this.state = {
            votes: 0
        }
    }

    handleCounter = () => {
        this.setState(prevState => ({
            votes: prevState.votes + 1
        }))
    }

    handleCounterMinus = () => {
        this.setState(prevState => ({
            votes: prevState.votes - 1
        }))
    }


    render() {
        return (
            <div>
                <label>{this.state.votes}</label>
                <button onClick={this.handleCounter}>+</button>
                <button onClick={this.handleCounterMinus}>-</button>
            </div>
        )
    }


}

export default Counter