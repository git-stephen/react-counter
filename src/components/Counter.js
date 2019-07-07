import React, {Component} from 'react'

class Counter extends Component
{
    constructor(props) {
        super(props)
    
        this.state = {
            count:0
        }
    }
    
    IncreaseCount()
    {
        this.setState(
            {
            count : this.state.count + 1
            }
        )
    }
    render() {
        return (
            <div>
                <h1> This is the counter application </h1>
                <button onClick={()=> this.IncreaseCount() }> Counter </button>
                <p>Total number of clicks is {this.state.count}</p>
            </div>
        )
    }
}

export default Counter