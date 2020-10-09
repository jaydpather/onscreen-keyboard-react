import React, { Component } from 'react'
import Key from '../components/Key';



export default class extends Component {
    state = { };



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
                {this.props.keyArray.map(curKeyRow => 
                    <div style={rowStyle} >
                    { curKeyRow.map(curKeyValue =>
                        <Key keyValue={curKeyValue} />
                    )}
                    </div>
                )}
            </div>
        );
    }
}
