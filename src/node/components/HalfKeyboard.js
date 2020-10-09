import React, { Component } from 'react'
import Key from '../components/Key';



export default class extends Component {
    state = { 
        HIndex: 2,
        VIndex: 2,
    };

    clamp(value, min, max){
        if(value < min){
            return min;
        }else if(value > max){
            return max;
        }else{
            return value;
        }
    }

    changeSelection(self){
        return function(hDelta, vDelta){
        //alert("halfKeyboard.changeSelection: " + hDelta + ", " + vDelta);
            let newHIndex = self.clamp(self.state.HIndex + hDelta, 0, 4);
            let newVIndex = self.clamp(self.state.VIndex + vDelta, 0, 4);
            self.setState({
                HIndex: newHIndex,
                VIndex: newVIndex
            });
        }
    }

    resetState(self){
        return function(){
            self.setState({
                HIndex: 2,
                VIndex: 2 //todo: don't hardcode!
            });
        }
    }

    render() {
        this.props.onRender({ 
            changeSelectionFn: this.changeSelection(this),
            halfKeyboardState: this.state,
            resetStateFn: this.resetState(this)
        });

        const mainStyle = {
            "border": "solid 1px #000",
            "display": "inline-block",
            marginLeft: "30px"
        };

        const activeStyle = { //todo: multiple classes instead of dup styles
            "border": "solid 3px #000",
            "display": "inline-block",
            marginLeft: "30px"
        };

        const rowStyle = {
            "float": "left",
            "clear": "left",
        }

        return(
            <div style={this.props.isActive ? activeStyle : mainStyle}>
                {this.props.keyArray.map((curKeyRow, curVIndex) => 
                    <div style={rowStyle} >
                    { curKeyRow.map((curKeyValue, curHIndex) =>
                        <Key keyValue={curKeyValue} isActiveKey={ this.state.HIndex == curHIndex && this.state.VIndex == curVIndex } />
                    )}
                    </div>
                )}
            </div>
        );
    }
}
