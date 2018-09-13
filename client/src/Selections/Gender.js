import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Female from "../images/femaleHair.png";
import Male from "../images/maleHair.png";

export default class Gender extends Component {
    render() {
        // console.log(this.props)
        return (
            <div id="genderDiv">
                <input checked={this.props.gender === "female"}
                    onChange={this.props.handleChange}
                    type="radio"
                    name="gender"
                    value="female" 
                    className="radio_item"
                    id="femaleBtn"/>
                <label 
                    className="label_item" 
                    htmlFor="femaleBtn">
                    <img src={Female} alt="female" className="genderPics" id="femalePic"/>
                </label>
                <input checked={this.props.gender === "male"}
                    onChange={this.props.handleChange}
                    type="radio"
                    name="gender"
                    value="male" 
                    className="radio_item"
                    id="maleBtn"/>
                <label
                    className="label_item" 
                    htmlFor="maleBtn">
                    <img src={Male} alt="male" className="genderPics" id="malePic" />
                </label>

            </div>
        )
    }
}
