import React, { Component } from 'react'

export default class extends Component {
    state = { };



    render() {
        const keyStyle = {
            "border": "solid 1px #000",
            "width": "30px",
            "verticalAlign": "middle",
            "textAlign": "center",
            display: "inline-block"
        };

        //todo: multiple classes instead of dup css properties
        const activeKeyStyle = {
            backgroundColor: "yellow",
            "border": "solid 1px #000",
            "width": "30px",
            "verticalAlign": "middle",
            "textAlign": "center",
            display: "inline-block"
        };

        return(
            <div style={ this.props.isActiveKey ? activeKeyStyle : keyStyle}>
                <pre>{this.props.keyValue}</pre>
            </div>
        );
    }
}
