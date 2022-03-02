
import React , { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter:0,
        }
        this.increment = this.increment.bind(this);    
        this.decrement = this.decrement.bind(this);
    }   
    increment(){
        this.setState({
            counter: this.state.counter + 1
        })
    }  
    decrement(){
        this.setState({
                counter : this.state.counter - 1
        })
    }
    render() {
        return (
            <div>
            <span class="count">{this.state.counter}</span>
            <button onClick={this.increment}>increace</button>
            <button onClick={this.decrement}>Decreace</button>
            </div>
        );
    }
}
export default Counter;