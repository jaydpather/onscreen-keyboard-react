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

    keyboardStates = {
        leftKeyboardState: null,
        rightKeyboardState: null,
    }

    _leftKeyArray = [
        [' ', 'j', 'b', '.', ','],
        [' ', 'h', 'e', 'l', '"'],
        ['x', 'n', ' ', 'r', 'y'],
        [' ', 'p', 'o', 'u', ' '],
        [' ', ' ', 'k', ' ', ' '],
    ];
  
    _rightKeyArray = [
        [' ', 'q', 'f', ' ', ' '],
        [' ', 'g', 'a', 'c', ' '],
        ['z', 's', ' ', 'i', 'w'],
        [' ', 'm', 't', 'd', ' '],
        [' ', ' ', 'v', ' ', ' '],
    ];

    setActiveKeyboard(self, physicalKeyPressed) {
        let newValue = self.state.isLeftKeyboardActive;

        //alert(physicalKeyPressed);
        
        let isLeftKey = physicalKeyPressed == 'w' || physicalKeyPressed == 'a' || physicalKeyPressed == 's' || physicalKeyPressed == 'd';
        if(isLeftKey)
            newValue = true;

        let isRightKey = physicalKeyPressed == 'i' || physicalKeyPressed == 'j' || physicalKeyPressed == 'k' || physicalKeyPressed == 'l';
        if(isRightKey)
            newValue = false;
        

        self.setState({
            isLeftKeyboardActive: newValue
        });

        return newValue;
        
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
                
                let keyArray = self.state.isLeftKeyboardActive ? self._leftKeyArray : self._rightKeyArray;
                let keyboardState = self.state.isLeftKeyboardActive ? self.keyboardStates.leftKeyboardState : self.keyboardStates.rightKeyboardState;

                let virtualKeyValue = keyArray[keyboardState.VIndex][keyboardState.HIndex];
                self.props.onVirtualKeySelected(virtualKeyValue);
            }
            else
            {
                let isLeftKeyboardActive = self.setActiveKeyboard(self, keyChar);
                let hDelta = self.getHDelta(keyChar);
                let vDelta = self.getVDelta(keyChar);
                if(isLeftKeyboardActive)
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
            self.keyboardStates.leftKeyboardState = halfKeyboardInfo.halfKeyboardState;
        }   
    }

    rightKeyboardOnRender(self){
        return function(halfKeyboardInfo){
            self.selectionFunctions.rightKeyboardChangeSelectionFn = halfKeyboardInfo.changeSelectionFn;
            self.keyboardStates.rightKeyboardState = halfKeyboardInfo.halfKeyboardState;
        }   
    }

    render() {
        this.props.onRender({onPhysicalKeyPressed: this.onPhysicalKeyPressed(this)});

        

        const mainStyle = {
            "border": "solid 3px #00f",
        };

        return(
            <div style={mainStyle}>
                <HalfKeyboard keyArray={this._leftKeyArray} isActive={this.state.isLeftKeyboardActive} onRender={this.leftKeyboardOnRender(this)} />
                <HalfKeyboard keyArray={this._rightKeyArray} isActive={!this.state.isLeftKeyboardActive} onRender={this.rightKeyboardOnRender(this)} />    
            </div>
        );
    }
}
