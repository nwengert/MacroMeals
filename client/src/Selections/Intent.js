import React, { Component } from 'react'

export default class Intent extends Component {
    render() {
        // console.log(this.state)
        return (
            <div id="intentDiv">
                <input checked={this.props.intent === "maintain"}
                    onChange={this.props.handleChange}
                    type="radio" 
                    className="intent_radio_item" 
                    name="intent" 
                    value="maintain" 
                    id="intent_radio1"/>
                    <label className="intent_label_item" id="intent1" 
                    htmlFor="intent_radio1">Maintain</label>
                <input checked={this.props.intent === "fat loss"}
                    onChange={this.props.handleChange}
                    type="radio" 
                    className="intent_radio_item" 
                    name="intent" 
                    value="fat loss" 
                    id="intent_radio2"/>
                    <label className="intent_label_item" id="intent2" 
                    htmlFor="intent_radio2">Fat loss</label>
                <input checked={this.props.intent === "gains"}
                    onChange={this.props.handleChange}
                    type="radio" 
                    className="intent_radio_item" 
                    name="intent" 
                    value="gains" 
                    id="intent_radio3"/>
                    <label className="intent_label_item" id="intent3" 
                    htmlFor="intent_radio3">Gains</label>
            </div>
        )
    }
}
