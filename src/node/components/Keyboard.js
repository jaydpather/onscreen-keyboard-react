import React, { Component } from 'react'
import HalfKeyboard from '../components/HalfKeyboard';

export default class extends Component {
    state = {
        isLeftKeyboardActive: this.props.isLeftKeyboardActive,
        
    }

    selectionFunctions = {
        leftKeyboardChangeSelectionFn: () => { },
        rightKeyboardChangeSelectionFn: () => { }
    }

    onPhysicalKeyPressed(self){
        return function(keyChar) {
            alert("keyboard component: you pressed: " + keyChar);
            //temp: just calling left keyboard by default for now
            self.selectionFunctions.leftKeyboardChangeSelectionFn(keyChar);
        }
    }

    leftKeyboardOnRender(self){
        return function(halfKeyboardInfo){
            self.selectionFunctions.leftKeyboardChangeSelectionFn = halfKeyboardInfo.changeSelectionFn;
        }   
    }

    rightKeyboardOnRender(self){
        return function(halfKeyboardInfo){
            self.selectionFunctions.rightKeyboardChangeSelectionFn = halfKeyboardInfo.changeSelectionFn;
        }   
    }

    render() {
        this.props.onRender({onPhysicalKeyPressed: this.onPhysicalKeyPressed(this)});

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
                <HalfKeyboard keyArray={leftKeyArray} isActive={this.state.isLeftKeyboardActive} onRender={this.leftKeyboardOnRender(this)} />
                <HalfKeyboard keyArray={rightKeyArray} isActive={!this.state.isLeftKeyboardActive} onRender={this.rightKeyboardOnRender(this)} />    
            </div>
        );
    }
}
