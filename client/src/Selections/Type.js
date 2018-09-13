import React, { Component } from 'react'

export default class Type extends Component {
    render() {
        // console.log(this.state)
        return (
            <div id="typeDiv">
                <input checked={this.props.type === "low-fat"}
                    onChange={this.props.handleChange}
                    type="radio" 
                    className="type_radio_item" 
                    name="type" 
                    value="low-fat" 
                    id="type_radio1"/>
                    <label className="type_label_item" id="type1" 
                    htmlFor="type_radio1">Low fat</label>
                <input checked={this.props.type === "low-carb"}
                    onChange={this.props.handleChange}
                    type="radio" 
                    className="type_radio_item" 
                    name="type" 
                    value="low-carb" 
                    id="type_radio2"/>
                    <label className="type_label_item" id="type2" 
                    htmlFor="type_radio2">Low carb</label>
            </div>
        )
    }
}
