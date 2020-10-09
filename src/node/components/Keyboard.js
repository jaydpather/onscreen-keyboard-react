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

    setActiveKeyboard(self, physicalKeyPressed) {
        let isLeftKey = physicalKeyPressed == 'w' || physicalKeyPressed == 'a' || physicalKeyPressed == 's' || physicalKeyPressed == 'd';
        self.setState({
            isLeftKeyboardActive: isLeftKey
        });
    }

    getHDelta = (keyChar) => {
        if(keyChar == "a" || keyChar == "j") {
            return -1;
        }
        else if(keyChar == "d" || keyChar == "l") {
            return 1;
        }
        else {
            return 0;
        }
    }

    getVDelta = (keyChar) => {
        if(keyChar == "w" || keyChar == "i") {
            return -1;
        }
        else if(keyChar == "s" || keyChar == "k") {
            return 1;
        }
        else {
            return 0;
        }
    }

    onPhysicalKeyPressed(self){
        return function(keyChar) {
            //alert("keyboard component: you pressed: " + keyChar);
            //todo: handle space
            //temp: just calling left keyboard by default for now
            if(keyChar == " "){
                //todo: select active key on active keyboard
            }
            else
            {
                self.setActiveKeyboard(self, keyChar);
                let hDelta = self.getHDelta(keyChar);
                let vDelta = self.getVDelta(keyChar);
                if(self.state.isLeftKeyboardActive)
                {
                    self.selectionFunctions.leftKeyboardChangeSelectionFn(hDelta, vDelta);
                }
                else
                {
                    self.selectionFunctions.rightKeyboardChangeSelectionFn(hDelta, vDelta);
                }
            }
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
