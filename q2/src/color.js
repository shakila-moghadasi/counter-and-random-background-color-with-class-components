import React , { Component } from 'react';

class ColorGenerator extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedColor: '',
            bgColor: [
                '#1ec891',
                '#ff725e',
                '#ffd05b',
            ],
        }
        this.random_color = this.random_color.bind(this);
    }
    random_color() {
        const item = this.state.bgColor[Math.floor(Math.random()*this.state.bgColor.length)];
        this.setState({
            selectedColor: item,
        })
    } 
    render() {
        return(
            <ul>
                <li>
                    <button onClick={this.random_color}>Add color</button>
                </li>
                {this.state.selectedColor.map(col => <li>{col}</li>)}
            </ul>
        )
    }
}
export default ColorGenerator;