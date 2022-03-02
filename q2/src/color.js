import React , { Component } from 'react';

class ColorGenerator extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedColor : '',
            bgColor: [
                '#1ec891',
                '#ff725e',
                '#ffd05b',
            ],
        }
        this.getRandomColor= this.getRandomColor.bind(this);
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        this.setState({
            selectedColor : color,
            state : {bgColor : [...this.state.bgColor , this.state.selectedColor]}
        })
    }
    render() {
        return(
            <ul>
                <li>
                    {/* <span>{this.state.selectedColor}</span> */}
                    <button  onClick={this.getRandomColor}>Add color</button>
                </li>
                {this.state.bgColor.map(col => <li>{col}</li>)}
            </ul>
        )
    }
}
export default ColorGenerator;