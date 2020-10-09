import React, { Component } from 'react'
import Key from '../components/Key';



export default class extends Component {
    state = { 
        HIndex: 2,
        VIndex: 2,
    };

    changeSelection(hDelta, vDelta){
        //alert("halfKeyboard.changeSelection: " + hDelta + ", " + vDelta);
        
    }

    render() {
        this.props.onRender({ 
            changeSelectionFn: this.changeSelection 
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
