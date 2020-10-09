import React, { Component } from 'react'

export default class extends Component {
    state = { };

    render() {
        const keyStyle = {
            //"margin-bottom": "5px",
            "border": "solid 1px #000",
            //"padding": "3px",
            "width": "30px",
            //"height": "20px",
            "verticalAlign": "middle",
            "textAlign": "center",
            //"float": "left"
            display: "inline-block"
        };

        return(
            <div style={keyStyle}>
                <pre>{this.props.keyValue}</pre>
            </div>
        );
    }
}
