import React, { Component } from 'react'
import Key from '../components/Key';



export default class extends Component {
    state = { 
        HIndex: 2,
        VIndex: 2,
    };



    render() {
        const mainStyle = {
            "border": "solid 3px #000",
            //"float": "left",
            //"clear": "left",
            "display": "inline-block",
            marginLeft: "30px"
        };

        const rowStyle = {
            "float": "left",
            "clear": "left",
        }

        return(
            <div style={mainStyle}>
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
