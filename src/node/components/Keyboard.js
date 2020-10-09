import React, { Component } from 'react'
import HalfKeyboard from '../components/HalfKeyboard';

export default class extends Component {
    state = {
        isLeftKeyboardActive: this.props.isLeftKeyboardActive
    }

    render() {
        let leftKeyArray = [
            [' ', 'j', 'b', '.', ','],
            [' ', 'h', 'e', 'l', '"'],
            ['x', 'n', ' ', 'r', 'y'],
            [' ', 'p', 'o', 'u', ' '],
            [' ', ' ', 'k', ' ', ' '],
          ];
      
          let rightKeyArray = [
            [' ', 'q', 'f', ' ', ' '],
            [' ', 'g', 'a', 'c', ' '],
            ['z', 's', ' ', 'i', 'w'],
            [' ', 'm', 't', 'd', ' '],
            [' ', ' ', 'v', ' ', ' '],
          ];

        const mainStyle = {
            "border": "solid 3px #00f",
        };

        return(
            <div style={mainStyle}>
                <HalfKeyboard keyArray={leftKeyArray} isActive={this.state.isLeftKeyboardActive} />
                <HalfKeyboard keyArray={rightKeyArray} isActive={!this.state.isLeftKeyboardActive} />    
            </div>
        );
    }
}
